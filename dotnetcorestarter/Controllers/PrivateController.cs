using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcorestarter.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Private")]
    public class PrivateController : Controller
    {
        public IActionResult Index()
        {
            return Ok("private api success!");
        }
    }
}