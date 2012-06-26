using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BabyTime.WebUI.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Index/

        public ActionResult Index()
        {
            return View();
        }

        public ViewResult New()
        {
            return View("Index");
        }
    }
}
