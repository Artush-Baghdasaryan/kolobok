using StudentHubBackend.Enum;

namespace StudentHubBackend.Dto
{
    public class DocumentDto
    {
        public string Name { get; set; }
        public DocumentType Type { get; set; }
        public string? Blob { get; set; }
        public float Size { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
