using StudentHubBackend.Enum;

namespace StudentHubBackend.Dto
{
    public class AnalyzeDto
    {
        public int DocumentId { get; set; }
        public int GroupId { get; set; }
        public LanguageType Language { get; set; }
    }
}
