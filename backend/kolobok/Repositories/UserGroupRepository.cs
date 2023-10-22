using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using StudentHubBackend.Data;
using StudentHubBackend.Models;

namespace StudentHubBackend.Repositories
{
    public class UserGroupRepository : BaseRepository<UserGroup>
    {
        private readonly DataContext _context;

        public UserGroupRepository(DataContext context) : base(context) 
        {
            _context = context;
        }

        public async Task<List<User>> GetGroupMembers(int groupId)
        {
            var members = await _context.UserGroups
                .Where(ug => ug.Id == groupId)
                .Select(ug => ug.User)
                .ToListAsync();

            return members;
        }

        public async Task<List<Group>> GetUserGroups(int userId)
        {
            var groups = await _context.UserGroups
                .Where(ug => ug.UserId == userId)
                .Select(ug => ug.Group)
                .ToListAsync();
            return groups;
        }
    }
}
