using StudentHubBackend.Enum;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentHubBackend.Models
{
    public class Document : Base
    {
        public string Name { get; set; }
        public DocumentType Type { get; set; }
        public string? Blob { get; set; }
        public float Size { get; set; }
        public DateTime CreatedDate { get; set; }
        public int parentId { get; set; }
    }
}
