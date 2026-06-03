using System;

namespace API.DTOs;

public class UserDto
{
    public required string UserName {  get; set; }
    public required int Token { get; set; }
}
