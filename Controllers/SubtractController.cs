using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubtractController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public string Subtract(int a, int b)
        {
            return $"{a} - {b} = {a - b}";
        }

    }
}
