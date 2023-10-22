using AutoMapper;
using Microsoft.AspNetCore.Identity;
using StudentHubBackend.Dto;
using StudentHubBackend.Enum;
using StudentHubBackend.Interfaces;
using StudentHubBackend.Models;
using StudentHubBackend.Repositories;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using Tesseract;

namespace StudentHubBackend.Services
{
    public class DocumentService : IDocumentService
    {
        private readonly DocumentRepository _documentRepository;
        private readonly GroupRepository _groupRepository;
        private readonly UserRepository _userRepository;
        private readonly IMapper _mapper;

        public DocumentService(
            DocumentRepository documentRepository,
            GroupRepository groupRepository,
            UserRepository userRepository,
            IMapper mapper)
        {
            _documentRepository = documentRepository;
            _groupRepository = groupRepository;
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<Document> AddDocument(int groupId, Document document)
        {
            var group = await _groupRepository.GetGroupById(groupId);
            if (group == null)
            {
                throw new FileNotFoundException(); // поменять
            }

            //Достать юзера, группу, затем документ. Реализовать, когда появится группа и юзер  
            //document.Blob = new byte[0];
            document.parentId = groupId;

            var documentAdded = await _documentRepository.AddEntity(document);
            group.Documents.Add(document);

            return documentAdded;
        }
        
        public async Task<Document> AnalyzeImage(int documentId, int groupId, LanguageType language)
        {
            var document = await _documentRepository.GetDocumentById(documentId);
            if (document == null)
            {
                throw new ArgumentNullException();
            }
            //var byteImage = File.ReadAllBytes(@"C:\Users\Obladai\Desktop\РУССКККИИИЙ.jpg");
            var fileStrList = document.Blob.Split(",");
            byte[] image64 = Convert.FromBase64String(fileStrList[1]);
            var imagePath = @"C:\ProgProjects\student-hub\StudentHubBackend\Data\Images\maxAnalyze.jpg";
            var pixImage = Pix.LoadFromFile(imagePath);

            using (var tesseractEngine = new TesseractEngine(@"Tesseract\tessdata\", language.ToString().ToLower(), EngineMode.Default))
            {
                using (var page = tesseractEngine.Process(pixImage))
                {
                    var extractedText = page.GetText();
                    Console.WriteLine(extractedText);

                    var textBytes = Encoding.UTF8.GetBytes(extractedText);
                    var group = await _groupRepository.GetById(groupId);
                    var newDocument = new Document
                    {
                        Name = $"{document.Name}_Analyze",
                        //Convert by Artush
                        Blob = Convert.ToBase64String(textBytes),
                        Size = textBytes.Length,
                        Type = DocumentType.Document,
                        CreatedDate = DateTime.Now,
                    };

                    return await AddDocument(groupId, newDocument);
                }
            }
            
        }

        public async Task<bool> DeleteDocument(int documentId)
        {
            var document = await _documentRepository.GetDocumentById(documentId);
            if (document == null)
            {
                throw new NotImplementedException();
            }

            return await _documentRepository.Delete(document);
        }

        public async Task<bool> DeosDocumentExist(int documentId)
        {
            return await _documentRepository.DoesExist(documentId);
        }

        public async Task<List<Document>> GetAllDocuments()
        {
            return await _documentRepository.GetAll();
        }

        public async Task<Document> GetDocumentById(int documentId)
        {
            var document = await _documentRepository.GetDocumentById(documentId);
            if (document == null)
            {
                throw new NotImplementedException();
            }

            return document;
        }

        public async Task<List<Document>> GetGroupDocuments(int groupId)
        {
            var docs = await _documentRepository.GetGroupDocs(groupId);
            return docs;
        }

        public async Task<Document?> SearchDocumentByName(string documentName)
        {
            var document = _documentRepository.SearchEntity(x => x.Name == documentName).FirstOrDefault();
            if (document is null)
            {
                return null;
            }

            return document;
        }

        public async Task<Document> UpdateDocumentName(int documentId, string documentName)
        {
            var document = await _documentRepository.GetDocumentById(documentId);
            if (document is null)
            {
                throw new FileNotFoundException();
            }
            document.Name = documentName;
            var documentUpdatet = await _documentRepository.UpdateEntity(document);

            return documentUpdatet;
        }
    }
}
