using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Controllers
{
    public class MemberController : Controller
    {
        //
        // GET: /Member/

        public ActionResult SignIn()
        {
            return View();
        }

    }
}
