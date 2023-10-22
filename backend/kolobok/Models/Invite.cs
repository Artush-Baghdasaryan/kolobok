using StudentHubBackend.Enum;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentHubBackend.Models
{
    public class Invite : Base
    {
        public User UserSent { get; set; }
        public User UserReceived { get; set; }
        public InviteStatus Status { get; set; }
        public Group Group { get; set; }

    }
}
