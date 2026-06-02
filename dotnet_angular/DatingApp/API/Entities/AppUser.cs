using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class AppUser
{
    // GUID is like UUID.. theoretically GUID is completely unique identifier whether offline or online and across systems and platforms to avoid collission
    [Key]
    public int Id { get; set; }

    public required string UserName { get; set; }
    public required byte[] PasswordHash { get; set; }
    public required byte[] PasswordSalt { get; set; }

    // public required string DisplayName { get; set; }
    // public required string Email { get; set; }
}
