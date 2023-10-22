using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentHubBackend.Dto;
using StudentHubBackend.Enum;
using StudentHubBackend.Interfaces;
using StudentHubBackend.Models;

namespace StudentHubBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentService _documentService;

        public DocumentController(IDocumentService documentService)
        {
            _documentService = documentService;
        }

        [HttpGet("{documentId}")]
        public async Task<ActionResult<Document>> GetDocument(int documentId)
        {
            try
            {
                var document = await _documentService.GetDocumentById(documentId);
                if (document == null)
                {
                    return NotFound();
                }

                return Ok(document);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get-all")]
        public async Task<ActionResult<List<Document?>>> GetAllDocument()
        {
            try
            {
                var documents = await _documentService.GetAllDocuments();
                return Ok(documents);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{groupId}/get-group-docs")]
        public async Task<ActionResult<List<Document?>>> GetGroupDocs(int groupId)
        {
            try
            {
                var documents = await _documentService.GetGroupDocuments(groupId);
                return Ok(documents);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("analyze")]
        public async Task<ActionResult<Document>> AnalyzeImage([FromBody] AnalyzeDto analyze)
        {
            try
            {
                var textDocument = await _documentService.AnalyzeImage(analyze.DocumentId, analyze.GroupId, analyze.Language);
                if (textDocument == null)
                {
                    throw new ArgumentNullException();
                }

                return Ok(textDocument);
            }
            catch(Exception ex) { return BadRequest(ex.Message); }
              
        }

        [HttpPost("add-document")]
        public async Task<ActionResult<Document?>> AddDocument([FromQuery] int userId, [FromQuery] int groupId, [FromBody] Document document)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var documentAdded = await _documentService.AddDocument(groupId, document);
                return Ok(documentAdded);
            }
            catch (Exception ex) { return BadRequest(ex.Message); };
        }

        [HttpDelete("{documentId}")]
        public async Task<ActionResult<bool>> DeleteDocument(int documentId)
        {
            try
            {
                var documentDeleted = await _documentService.DeleteDocument(documentId);
                return Ok(documentDeleted);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{documentId}")]
        public async Task<ActionResult<Document>> UpdateDocumentName(int documentId, [FromQuery] string name)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var documentUpdated = await _documentService.UpdateDocumentName(documentId, name);
                return Ok(documentUpdated);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
    }
}
