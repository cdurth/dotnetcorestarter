using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace dotnetcorestarter.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class TimeController : Controller
    {
        private IHttpContextAccessor _accessor;

        public TimeController(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }
        [HttpGet]
        public IActionResult ServerTime()
        {
            return new JsonResult(new { timestamp = DateTime.UtcNow.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz") });
        }

        [HttpGet]
        public async Task<object> IPTime()
        {
            string ip = (_accessor.HttpContext?.Connection?.RemoteIpAddress?.ToString() == "::1") ? "66.161.168.254" : _accessor.HttpContext?.Connection?.RemoteIpAddress?.ToString();
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    //Post http callas.
                    var response = client.GetAsync("http://worldtimeapi.org/api/ip/" + ip).Result;
                    var responseBody = response.Content.ReadAsStringAsync().Result;
                    return JsonConvert.DeserializeObject<object>(responseBody);

                }
                catch (HttpRequestException e)
                {
                    Console.WriteLine("\nException Caught!");
                    Console.WriteLine("Message :{0} ", e.Message);
                }
            }
            return null;
        }
    }
}