using BLL.DTO;
using BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PL.Mappers;
using PL.VM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PL.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class IndexController : ControllerBase
    {
        private readonly ILogger<IndexController> _logger;
        private IUserService userService;

        public IndexController(ILogger<IndexController> logger, IUserService userService)
        {
            this._logger = logger;
            this.userService = userService;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody]UserVM userVM)
        {
            UserDTO user = await UserMapper.MapSingleFromVMtoDTO(userVM);
            if (await this.userService.IsRegistrationPossible(user))
            {
                await this.userService.Register(await UserMapper.MapSingleFromVMtoDTO(userVM));
                return Ok(userVM);
            }
            else
            {
                return StatusCode(400);
            }
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody]UserVM userVM)
        {
            UserDTO user = await UserMapper.MapSingleFromVMtoDTO(userVM);
            if (await this.userService.IsLoginSuccessful(user))
            {
                return Ok(userVM);
            }
            else
            {
                return StatusCode(400);
            }
        }
    }
}
