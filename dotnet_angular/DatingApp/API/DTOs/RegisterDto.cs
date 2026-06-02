using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

// This is a class that would be used to fish out the parameters from an object
public class RegisterDto
{
    [Required]
    [MaxLength(100)]
    public required string Username { get; set; }

    [Required]
    
    public required string Password { get; set; }
}
