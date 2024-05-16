using Microsoft.AspNetCore.Mvc;

namespace CollegeERP.Controllers
{
    public class StudentController : Controller
    {


        public IActionResult Index()
        {
            return View();
        }
    }
}
