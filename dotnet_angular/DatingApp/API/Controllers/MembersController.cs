using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{   
    [Authorize]
    //https://localhost:5001/api/members 
    public class MembersController(AppDbContext context) : BaseApiController
    {
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
        {
            var members = await context.Users.ToListAsync();
            return members;
        }
        
        [Authorize]
        [HttpGet("{id}")] // https://localhost:5001/api/members/1
        public async Task<ActionResult<AppUser>> GetMember(int id)
        {
            var member = await context.Users.FindAsync(id);
            if(member == null) return NotFound();

            return member;
        }
    }
}
