const cardsContainer = document.querySelector(".cards .container");
const searchBar = document.querySelector(".container .search");


const data = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "/images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "/images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "/images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "/images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "/images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "/images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "/images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "/images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "/images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "/images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
]

data.forEach((element) => {
  cardsContainer.innerHTML += getCardHtml(element);
})
function getTagsHTML(tags) {
  return `<li class="qualification" dataset-tag = "${tags}">${tags}</li>`;
}
function getTagNew(newTag) {
  if (newTag === true) {
    return `<li class="new">New</li>`;
  } else {
    return "";
  }
}
function getTagfeatured(featTag) {
  if (featTag === true) {
    return `<li class="featured">Freatured</li>`;
  } else {
    return "";
  }
}

function getCardHtml(element) {
  let tags = "###Tags###";
  let newTag = "###New###";
  let featuredTag = "###featured###";

  let jobListingHtml = ` <div class="card">
<div>
<img src="${element.logo}"  alt="">
<div class="details">
  <ul>
    <li class="company-name" >${element.company}</li>
    ${newTag}
    ${featuredTag}
  </ul>

  <h3>${element.position}</h3>
  <p>${element.postedAt}<span></span> ${element.contract}<span></span> ${element.location}</p>
</div>
</div>
<ul class="qualification-list">

${tags}
</ul>
</div>`;
  const newTagArray = getTagNew(element.new);
  const featTagArray = getTagfeatured(element.featured);
  // Get Tags for level role ...
  const tagsArray = [
    element.role,
    element.level,
    ...(element.languages || []),
    ...(element.tools || []),
  ];

  const tagsstring = tagsArray.reduce((acc, curent) => {
    return acc + getTagsHTML(curent);
  }, "");
  return jobListingHtml
    .replace(newTag, newTagArray)
    .replace(tags, tagsstring)
    .replace(featuredTag, featTagArray);
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("qualification")) {
    searchTag(e.target.textContent);
  }
});

function searchTag(tag) {
  let searchText = Array.from(searchBar.textContent.split(" "));
  if (searchBar.childElementCount === 0) {
    searchBar.style.opacity = "1";
    searchBar.innerHTML = `<span class="search-tag">${tag} </span>`;
    filterCards(tag);
  } else if (searchBar.childElementCount > 0) {
    if (searchText.indexOf(tag) != 0) {
      searchBar.innerHTML += `<span class="search-tag">${tag} </span>`;
      filterCards(tag);
    }
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("search-tag")) {
    e.target.remove();
    let tag = Array.from(document.querySelectorAll(".search-tag")).map((n) =>
      n.textContent.trim()
    );
    
    
    if(!tag.length){
      filterCards(tag)
    }else{
      tag.forEach((t) => filterCards(t));
    }
  }
});
function filterCards(tag) {
  let cards = Array.from(document.querySelectorAll(".card"));
  let empty = {};
  cards.forEach((card, index) => {
    let li = Array.from(card.children[1].children).map((n) => n.textContent);

    empty[index] = {
      card: card,
      li: li,
    };
  });

  for (i = 0; i <= Object.keys(empty).length; i++) {
    let arr = empty[i].li;

    //If dosen't match
    var x = arr.indexOf(tag);

    if (arr.indexOf(tag) === -1) {
      empty[i].card.classList.add("inactive");
    }
    // If it matchs
    else if (arr.indexOf(tag) === 0) {
      empty[i].card.classList.remove("inactive");
    }
    if(!tag.length){
      empty[i].card.classList.remove("inactive");
    }
  }
}

