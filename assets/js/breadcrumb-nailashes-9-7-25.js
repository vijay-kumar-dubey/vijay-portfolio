                                        <section class="breadcrumb-section py-4">
    <div class="container">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="desk-bred">
            <ol class="breadcrumb mb-0" id="breadcrumbs-one" itemscope itemtype="http://schema.org/BreadcrumbList">
                <li class="breadcrumb-item fs-26 text-capitalize" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <a href="{{ route_url('home', request('slug')) }}" class="fs-26">Home</a>
                </li>
            </ol>
        </nav>
    </div>
</section>
                                    



//breadcrumb
document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbContainer = document.querySelector(
    "nav.desk-bred ol.breadcrumb"
  );
  if (!breadcrumbContainer) return;

  // Keep only the "Home" breadcrumb initially
  const items = breadcrumbContainer.querySelectorAll("li");
  items.forEach((item, index) => {
    if (index > 0) item.remove();
  });

  const pathSegments = window.location.pathname.split("/").filter(Boolean);

  // Find location slug in the path
  let micrositeIndex = pathSegments.findIndex((segment) =>
    /^\w+(-\w+)*-\d+$/.test(segment)
  );

  if (micrositeIndex === -1) return; // fallback: nothing to show

  const dynamicSegments = pathSegments.slice(micrositeIndex + 1);
  let urlPath = "/" + pathSegments.slice(0, micrositeIndex + 1).join("/");

  dynamicSegments.forEach((segment, index) => {
    urlPath += `/${segment}`;
    const isLast = index === dynamicSegments.length - 1;

    let rawText = decodeURIComponent(segment)
      .replace(/[-_]/g, " ")
      .toLowerCase();

    const labelMap = {
      "faq": "FAQS",
      "reachus": "Contact Us",
      "blog": "Blogs",
     };

    let text =
      labelMap[rawText] || rawText.replace(/\b\w/g, (l) => l.toUpperCase());
    const li = document.createElement("li");
    li.className = `breadcrumb-item fs-26 text-capitalize ${
      isLast ? "active text-dark" : ""
    }`;
    li.setAttribute("itemprop", "itemListElement");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "http://schema.org/ListItem");

    li.innerHTML = isLast
      ? `<meta itemprop="position" content="${index + 2}">
               <span class="breadcrumb-page fs-26 text-capitalize text-dark">${text}</span>`
      : `<a href="${urlPath}" class="fs-26">${text}</a>`;

    breadcrumbContainer.appendChild(li);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;

    document.querySelectorAll('.heading-links .link-text')
        .forEach((link) => {
            let href = link.getAttribute('href') || '';

            // Absolute URLs ko handle karna
            if (href.startsWith('http://') || href.startsWith('https://')) {
                const url = new URL(href);
                href = url.pathname; // Sirf path ko le rahe hain
            }

            // Ensure href starts with '/'
            if (!href.startsWith('/')) {
                href = '/' + href;
            }

            // Matching logic ko update karna
            if (currentPath === href || currentPath.startsWith(href)) {
                link.classList.add('active');
                const parent = link.closest('li');
                if (parent) parent.classList.add('active');
            }
        });
});