using Microsoft.EntityFrameworkCore;
using StudentHubBackend.Data;
using StudentHubBackend.Enum;
using StudentHubBackend.Models;
using System.Text.RegularExpressions;

namespace StudentHubBackend.Repositories
{
    public class InviteRepository : BaseRepository<Invite>
    {
        private readonly DataContext _context;

        public InviteRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<Invite> GetInviteById(int inviteId)
        {
            return await _context.Invites.Where(g => g.Id == inviteId)
                .Include(i => i.UserSent)
                .Include(i => i.UserReceived)
                .Include(i => i.Group)
                .FirstOrDefaultAsync();
        }

        public async Task<List<Invite>> GetUserInvites(int userId)
        {
            return await _context.Invites.Where(x => x.UserReceived.Id == userId && x.Status == InviteStatus.Sent)
                .Include(i => i.UserSent)
                .Include(i => i.UserReceived)
                .Include(i => i.Group)
                .ToListAsync();
        }


    }
}
