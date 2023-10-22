using Microsoft.EntityFrameworkCore;
using StudentHubBackend.Data;
using StudentHubBackend.Models;

namespace StudentHubBackend.Repositories
{
    public class DocumentRepository : BaseRepository<Document>
    {
        private readonly DataContext _context;

        public DocumentRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<Document> GetDocumentById(int documentId)
        {
            return await _context.Documents.Where(document => document.Id == documentId).FirstOrDefaultAsync();
        }

        public async Task<List<Document>> GetGroupDocs(int groupId)
        {
            var docs = await _context.Documents.Where(d => d.parentId == groupId).ToListAsync();
            return docs;
        }
    }
}
