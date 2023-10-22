using StudentHubBackend.Enum;

namespace StudentHubBackend.Models
{
    public class Group : Base
    {
        public string Name { get; set; }
        public string? Image { get; set; }
        public string? Description { get; set; }
        public float Price { get; set; }
        public User Owner { get; set; }
        public ICollection<UserGroup> UserGroup { get; set; }
        public ICollection<Document> Documents { get; set; }
        public DateTime CreatedDate { get; set; }
        public float Rating { get; set; }
        public AccessType AccessType { get; set; }
    }
}
