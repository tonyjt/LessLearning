using System.Web;
using System.Web.Optimization;
using Web.Models;

namespace Web
{
    public class BundleConfig
    {
        // 有关 Bundling 的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/jquerythemepunch").IncludeDirectory
                ("~/Scripts/jquery.themepunch", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryisotope").IncludeDirectory
                ("~/Scripts/jquery.isotope", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryfancybox").IncludeDirectory
                ("~/Scripts/jquery.fancybox", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryflexslider").IncludeDirectory
                ("~/Scripts/jquery.flexslider", "*.js"));


            bundles.Add(new ScriptBundle("~/bundles/js").Include("~/Scripts/site.js"));


            // 使用 Modernizr 的开发版本进行开发和了解信息。然后，当你做好
            // 生产准备时，请使用 http://modernizr.com 上的生成工具来仅选择所需的测试。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            //bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
            //boostrap
            bundles.Add(new StyleBundle("~/Content/bootstrap").Include("~/Content/bootstrap.css"));
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include("~/Scripts/bootstrap.js"));


            bundles.Add(new ScriptBundle("~/bundles/less").Include("~/Scripts/less-1.3.0.js"));

            bundles.Add(new StyleBundle("~/Content/bizstrap").IncludeDirectory("~/Content/bizstrap", "*.css"));
            bundles.Add(new ScriptBundle("~/bundles/bizstrap").IncludeDirectory("~/Scripts/bizstrap", "*.js"));


            //less
            var lessBundle = new Bundle("~/Content/less").IncludeDirectory("~/Content/less", "*.less"); 
            lessBundle.Transforms.Add(new LessTransform());
            lessBundle.Transforms.Add(new CssMinify());
            bundles.Add(lessBundle);
            
            //css
            bundles.Add(new StyleBundle("~/Content/css").IncludeDirectory("~/Content", "*.css"));
            //BundleTable.EnableOptimizations = true;
        }
    }
}