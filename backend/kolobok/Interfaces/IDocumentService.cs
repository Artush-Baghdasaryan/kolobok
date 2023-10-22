using StudentHubBackend.Dto;
using StudentHubBackend.Enum;
using StudentHubBackend.Models;

namespace StudentHubBackend.Interfaces
{
    public interface IDocumentService
    {
        Task<List<Document>> GetAllDocuments();
        Task<Document> GetDocumentById(int documentId);
        Task<Document?> SearchDocumentByName(string documentName);
        Task<bool> DeosDocumentExist(int documentId);
        Task<Document> AddDocument(int groupId, Document document);
        //Task<Models.File> UpdateFile(string fileId, Models.File file);
        Task<Document> UpdateDocumentName(int documentId, string documentName);
        Task<bool> DeleteDocument(int documentId);
        Task<Document> AnalyzeImage(int documentId, int groupId, LanguageType language);
        Task<List<Document>> GetGroupDocuments(int groupId);
    }
}
