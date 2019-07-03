using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcorestarter.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class TestController : Controller
    {
        [Authorize]
        [HttpGet]
        public async Task<object> Protected()
        {
            return "Protected area";
        }

        [Authorize(Roles = "User")]
        [HttpGet]
        public async Task<object> User()
        {
            return "User area";
        }

        [Authorize(Roles = "Administrator")]
        [HttpGet]
        public async Task<object> Admin()
        {
            return "Admin area";
        }
    }
}