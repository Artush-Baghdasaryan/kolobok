namespace StudentHubBackend.Models
{
    public class User : Base
    {
        public string Nickname { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public byte[]? Avatar { get; set; }
        public ICollection<UserGroup> UserGroup { get; set; }
    }
}
