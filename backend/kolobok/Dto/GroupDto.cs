using StudentHubBackend.Enum;
using StudentHubBackend.Models;

namespace StudentHubBackend.Dto
{
    public class GroupDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Image { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public float Rating { get; set; }
        public AccessType AccessType { get; set; }
    }
}
