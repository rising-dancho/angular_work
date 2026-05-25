namespace API.Entities;

public class AppUser
{
    // GUID is like UUID.. theoretically GUID is completely unique identifier whether offline or online and across systems and platforms to avoid collission
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string DisplayName { get; set; }
    public required string Email { get; set; }
}
