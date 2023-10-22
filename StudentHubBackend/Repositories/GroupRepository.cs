using Microsoft.EntityFrameworkCore;
using StudentHubBackend.Data;
using StudentHubBackend.Models;
using System.Runtime.CompilerServices;

namespace StudentHubBackend.Repositories
{
    public class GroupRepository : BaseRepository<Group>
    {
        public readonly DataContext _context;

        public GroupRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<Group> GetGroupById(int groupId)
        {
            return await _context.Groups
                .Where(g => g.Id == groupId)
                .Include(g => g.Owner)
                .Include(g => g.Documents)
                .FirstOrDefaultAsync();
        }

        public async Task<List<Group>> SearchGroups(string search)
        {
            var searchString = search.ToLower();
            var groups = await _context.Groups
                .Where(g => g.Name.ToLower().Contains(searchString) || g.Description.ToLower().Contains(searchString))
                .ToListAsync();
            return groups;
        }
    }
}
