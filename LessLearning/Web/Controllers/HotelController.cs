﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Controllers
{
    public class HotelController : Controller
    {
        //
        // GET: /Hotel/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Hotel()
        {
            return View();
        }
        public ActionResult Order()
        {
            return View();
        }
        public ActionResult Finish()
        {
            return View();
        }
    }
}
