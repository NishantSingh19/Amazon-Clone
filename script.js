let amazonLogo = document.querySelectorAll("#logo");
let selectLanguage = document.querySelector("#language");
let topSignin = document.querySelector(".sign-in");
const wrapper = document.querySelector(".wrapper");
const navbar = document.querySelector(".navbar");
if (window.location.pathname !== "/index.html") {
  navbar.style.position = "relative";
}

amazonLogo.forEach((logo) => {
  logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

function pageLanguage() {
  selectLanguage.addEventListener("mouseover", () => {
    let otherLanguage = document.querySelector(".otherLanguage");
    selectLanguage.append(otherLanguage);
    otherLanguage.style.display = "block";
  });

  selectLanguage.addEventListener("mouseout", () => {
    let otherLanguage = document.querySelector(".otherLanguage");
    selectLanguage.append(otherLanguage);
    otherLanguage.style.display = "none";
  });
}

function signIn() {
  topSignin.addEventListener("mouseover", () => {
    let topSignup = document.querySelector(".signup-extra");
    topSignin.append(topSignup);
    topSignup.style.display = "flex";
  });

  topSignin.addEventListener("mouseout", () => {
    let topSignup = document.querySelector(".signup-extra");
    topSignin.append(topSignup);
    topSignup.style.display = "none";
  });
}
signIn();
pageLanguage();

let signButton = document.querySelector(".signButton");
let signButton2 = document.querySelector(".signButton2");
let signPage = document.querySelector(".signPage");
let signPage2 = document.querySelector(".signPage2");

signButton.addEventListener("click", () => {
  wrapper.style.display = "none";
  signPage.style.display = "flex";
  signPage2.style.display = "none";
});

signButton2.addEventListener("click", () => {
  wrapper.style.display = "none";
  signPage.style.display = "flex";
  signPage2.style.display = "none";
});

const pageButton = document.querySelector(".pageButton");
pageButton.addEventListener("click", () => {
  checkingInput();
  event.preventDefault();
});

let emailBox = document.querySelectorAll(".emailBox");
const infoCheck = document.querySelector(".infoCheck");
let updateUser = document.querySelector(".updateUser");
let userName = document.querySelector("#userName");
let signup = document.querySelector(".signup");

function checkingInput() {
  emailBox.forEach((emailBox) => {
    if (emailBox.value === "" && emailBox.type == "email") {
      infoCheck.innerHTML = "Please enter email or phone number";
      infoCheck.style.color = "red";
      emailBox.style.border = "2px solid red";
      setTimeout(() => {
        emailBox.style.border = "1px solid grey";
        infoCheck.style.display = "none";
      }, 2000);
    } else {
      infoCheck.innerHTML = "Success";
      infoCheck.style.color = "green";
      setTimeout(() => {
        wrapper.style.display = "block";
      }, 20);
      userName.innerHTML = `Hello, ${emailBox.value}`;
      userName.style.margin = " 0 20px";
      updateUser.innerHTML = `Hello, ${emailBox.value}`;
      signup.style.display = "none";
      signPage.style.display = "none";
      signButton2.innerHTML = "Log out";
      pageOut();
    }
  });
}

let createPage = document.querySelectorAll(".createPage");
createPage.forEach((page) => {
  page.addEventListener("click", () => {
    wrapper.style.display = "none";
    signPage.style.display = "none";
    signPage2.style.display = "flex";
  });
});

const verifyNumber = document.querySelector(".verifyNumber");
verifyNumber.addEventListener("click", () => {
  userInput();
  event.preventDefault();
});

function userInput() {
  const emailBox2 = document.querySelector(".emailBox2");
  const userPassword = document.querySelector(".emailBox3");
  const userMobile = document.querySelector(".userMobile");
  const updateUser = document.querySelector(".updateUser");
  const infoCheck2 = document.querySelector(".infoCheck2");

  if (emailBox2.value === "") {
    emailBox2.style.border = "2px solid red";
    setTimeout(() => {
      emailBox2.style.border = "1px solid grey";
    }, 2000);
  } else if (userMobile.value === "") {
    userMobile.style.border = "2px solid red";
    setTimeout(() => {
      userMobile.style.border = "1px solid grey";
    }, 2000);
  } else if (userPassword.value < 6 || userPassword.value === "") {
    userPassword.style.border = "2px solid red";
    setTimeout(() => {
      userPassword.style.border = "1px solid grey";
    }, 2000);
  } else if (
    emailBox2.value !== "" &&
    userMobile.value !== "" &&
    userPassword.value !== ""
  ) {
    infoCheck2.innerHTML = "Success";
    infoCheck2.style.color = "green";
    setTimeout(() => {
      wrapper.style.display = "block";
    }, 20);
    updateUser.innerHTML = `Hello, ${emailBox2.value}`;
    let userName = document.querySelector("#userName");
    userName.innerHTML = `Hello, ${emailBox.value}`;
    signPage2.style.display = "none";
    signup.style.display = "none";
    signButton2.innerHTML = "Log out";
    pageOut();
  }
}

function pageOut() {
  if (signButton2.innerHTML === "Log out") {
    signButton2.addEventListener("click", () => {
      signPage.style.display = "none";
      window.location.reload();
      signIn();
    });
  }
}

function sideBar() {
  let sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "block";
  sideBar.style.position = "absolute";
  sideBar.style.top = "0%";
  sideBar.style.zIndex = "1000";
  wrapper.style.opacity = "0.75";
  document.body.style.overflow = "hidden";

  let closeBar = document.querySelector("#closeBar");
  closeBar.addEventListener("click", () => {
    sideBar.style.display = "none";
    wrapper.style.opacity = "1";
    document.body.style.overflow = "scroll";
  });
}

if (window.location.pathname == "/index.html") {
  let openSideBar = document.querySelector(".openSideBar");
  openSideBar.addEventListener("click", () => {
    sideBar();
  });
}

let laptopCollection = document.querySelectorAll(".laptopCollection");
let gamingAccesories = document.querySelectorAll(".gamingAccesories");
let toys = document.querySelectorAll(".toys");
let fashionTrends = document.querySelectorAll(".fashionTrends");
let gadget = document.querySelectorAll(".gadget");
let HomeDecor = document.querySelectorAll(".HomeDecor");
let mobiles = document.querySelectorAll(".mobiles");
let newFashion = document.querySelectorAll(".newFashion");
let beauty = document.querySelectorAll(".beauty");
let kitchen = document.querySelectorAll(".kitchen");
let smartwatches = document.querySelectorAll(".smartwatches");
let school = document.querySelectorAll(".school");
let games = document.querySelectorAll(".games");
let shoes = document.querySelectorAll(".shoes");
let jewellery = document.querySelectorAll(".jewellery");
let camera = document.querySelectorAll(".camera");
let tShirt = document.querySelectorAll(".t-shirt");
let saree = document.querySelectorAll(".saree");
let perfume = document.querySelectorAll(".perfume");
let furnitures = document.querySelectorAll(".furnitures");

laptopCollection.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "laptop.html";
  });
});

gamingAccesories.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "gaming.html";
  });
});

toys.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "toys.html";
  });
});

fashionTrends.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "fashion.html";
  });
});

gadget.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "gadget.html";
  });
});

HomeDecor.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "HomeDecor.html";
  });
});

mobiles.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "mobiles.html";
  });
});

newFashion.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "newFashion.html";
  });
});

beauty.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "beauty.html";
  });
});

kitchen.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "kitchen.html";
  });
});

smartwatches.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "smartwatches.html";
  });
});

school.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "school.html";
  });
});

games.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "games.html";
  });
});

shoes.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "shoes.html";
  });
});

jewellery.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "jewellery.html";
  });
});

camera.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "camera.html";
  });
});

tShirt.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "t-shirt.html";
  });
});

saree.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "saree.html";
  });
});

perfume.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "perfume.html";
  });
});

furnitures.forEach((items) => {
  items.addEventListener("click", () => {
    window.location.href = "furnitures.html";
  });
});

let productPrice = document.querySelectorAll(".productPrice");
let rating = document.querySelectorAll(".rating");
let images = document.querySelectorAll(".img2");
let title = document.querySelectorAll(".title");

if (window.location.pathname == "/fashion.html") {
  images.forEach((img) => {
    img.style.width = "fit-content";
    img.style.margin = "20px 85px 5px 85px";
  });
}

if (window.location.pathname == "/beauty.html") {
  images.forEach((img) => {
    if (img.id == "close") {
      img.style.width = "300px";
    } else {
      img.style.width = "fit-content";
      img.style.margin = "8px 80px";
    }
  });
}

if (window.location.pathname == "/newFashion.html") {
  images.forEach((img) => {
    if (img.id == "close") {
      img.style.width = "300px";
    } else {
      img.style.width = "fit-content";
      img.style.margin = "16px 85px 5px 85px";
    }
  });
}

if (window.location.pathname == "/mobiles.html") {
  images.forEach((img) => {
    img.style.width = "fit-content";
    img.style.margin = "20px 85px 5px 85px";
  });
}

if (window.location.pathname == "/smartwatches.html") {
  images.forEach((img) => {
    img.style.width = "fit-content";
    img.style.margin = "20px 66px 5px";
  });
}

if (window.location.pathname == "/school.html") {
  images.forEach((img) => {
    img.style.width = "fit-content";
    img.style.margin = "20px 50px 5px";
  });
}

if (window.location.pathname == "/camera.html") {
  images.forEach((img) => {
    if (img.id == "close") {
      img.style.width = "300px";
    } else {
      img.style.width = "fit-content";
    }
    if (img.id == "space") {
      img.style.width = "fit-content";
      img.style.margin = "8px 78px";
    }
  });
}

if (window.location.pathname == "/t-shirt.html") {
  images.forEach((img) => {
    if (img.id == "close") {
      img.style.width = "300px";
    } else {
      img.style.width = "fit-content";
      img.style.margin = "20px 72px 20px";
    }
  });
}

if (window.location.pathname == "/perfume.html") {
  images.forEach((img) => {
    if (img.id == "close") {
      img.style.width = "300px";
    } else {
      img.style.width = "fit-content";
      img.style.margin = "8px 60px";
    }
    if (img.id == "space") {
      img.style.width = "fit-content";
      img.style.margin = "8px 97.5px";
    }
  });
}

if (window.location.pathname == "/saree.html") {
  images.forEach((img) => {
    if (img.id == "close") {
      img.style.width = "fit-content";
      img.style.margin = "15px 127px";
    } else {
      img.style.width = "fit-content";
      img.style.margin = "15px 92px";
    }
  });
}

title.forEach((title) => {
  if (window.location.pathname == "/HomeDecor.html") {
    title.innerHTML = `Transform Your Home with Stylish Décor: Discover Unique Furniture, Wall Art, and Accessories to Create a Cozy, Modern Space with Our Exclusive Collection at Affordable Prices.`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/mobiles.html") {
    title.innerHTML = `Latest Smartphones: Explore Top Brands, Features, and Deals on Cutting-Edge Mobile Phones. Find Your Perfect Device with Advanced Cameras, Powerful Processors, and Stunning Displays!`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/newFashion.html") {
    title.innerHTML = `Fashion Forward: Discover Trendy Sarees, Stylish Sunglasses, Chic Shoes, and Glamorous Jewelry – Shop the Latest Must-Haves for Every Occasion at Our E-Commerce Store!`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/beauty.html") {
    title.innerHTML = `Beauty & Personal Care: Unveil top beauty products for skincare, hair, and grooming. Discover innovative solutions and trusted brands that help you feel confident, pampered, and ready for any occasion!`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/kitchen.html") {
    title.innerHTML = `Explore a World of Kitchen & Dining Essentials – From Modern Cookware to Timeless Tableware, Discover Everything You Need to Create Memorable Meals and Beautiful Tablescapes.`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/smartwatches.html") {
    title.innerHTML = `Enhance your daily routine with smartwatches that bring convenience to your fingertips. Manage notifications, monitor fitness goals, and enjoy a customizable, sleek accessory that complements any look.`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/school.html") {
    title.innerHTML = `Top-Quality School Supplies for Every Student: Notebooks, Pens, Backpacks, Art Supplies & More. Shop our wide range of essential school supplies to ensure a successful and organized school year for all ages and grades.`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/games.html") {
    title.innerHTML = `Level Up Your Gaming Experience: Shop Exclusive Apparel, Collectibles, and Accessories for Gamers! Find Unique Merchandise to Express Your Passion and Stand Out in the Gaming Community!`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/shoes.html") {
    title.innerHTML = `Unbeatable Comfort, Unmatched Style: Shop Our Collection of Shoes Tailored for Every Taste and Need. From Relaxed Flats to Statement Heels and Durable Boots, Discover Footwear That Fits You.`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/jewellery.html") {
    title.innerHTML = `Celebrate Life's Special Moments with Our Exquisite Jewellery. Browse Our Unique Jewellery Pieces Ranging from Timeless Classics to Modern Designs. Find the Perfect Match to Complement Your Style.`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/camera.html") {
    title.innerHTML = `Explore High-Performance Cameras: Capture Every Moment with Top DSLR and Mirrorless for Photography & Video. Shop the Best Camera Deals for Professionals and Beginners – Trusted Brands at Competitive Prices.`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/t-shirt.html") {
    title.innerHTML = `Shop the Latest T-Shirts: Explore a wide range of styles, from classic basics to unique graphic prints. Comfortable, versatile, and designed for all-day wear. Find your perfect fit today!`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/saree.html") {
    title.innerHTML = `Explore a Collection of Sarees: Traditional, Designer, and Styles for Every Occasion. Discover Vibrant Colors, Rich Fabrics, and Unique Patterns to Elevate Your Wardrobe in Timeless Fashion.`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/perfume.html") {
    title.innerHTML = `Discover Your Signature Scent: Explore Our Exquisite Collection of Designer Perfumes for Every Occasion – Elegant, Captivating Fragrances That Define Your Unique Personality. Shop Now for Irresistible Deals on Luxurious Perfumes!`;
  }
});

title.forEach((title) => {
  if (window.location.pathname == "/furnitures.html") {
    title.innerHTML = `Stylish, Comfortable, and Affordable Furniture: Shop Modern and Classic Designs for Living Room, Bedroom, Office & Beyond. Create the Perfect Space with Our Wide Selection of High-Quality Furniture. Shop Now!`;
  }
});

productPrice.forEach((price) => {
  if (window.location.pathname == "/toys.html") {
    const rndInt = random(249, 799);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }
  if (window.location.pathname == "/laptop.html") {
    const rndInt = random(29999, 49999);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/gaming.html") {
    const rndInt = random(499, 1999);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/fashion.html") {
    const rndInt = random(299, 899);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/gadget.html") {
    const rndInt = random(199, 499);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/HomeDecor.html") {
    const rndInt = random(299, 599);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/mobiles.html") {
    const rndInt = random(16999, 24999);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/newFashion.html") {
    const rndInt = random(499, 1499);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/beauty.html") {
    const rndInt = random(499, 1199);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/kitchen.html") {
    const rndInt = random(299, 999);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/smartwatches.html") {
    const rndInt = random(599, 1299);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/school.html") {
    const rndInt = random(499, 999);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/games.html") {
    const rndInt = random(799, 1499);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/shoes.html") {
    const rndInt = random(599, 1099);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/jewellery.html") {
    const rndInt = random(499, 1499);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/camera.html") {
    const rndInt = random(59999, 79999);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/t-shirt.html") {
    const rndInt = random(299, 599);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/saree.html") {
    const rndInt = random(599, 999);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/perfume.html") {
    const rndInt = random(499, 699);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  if (window.location.pathname == "/furnitures.html") {
    const rndInt = random(4999, 9999);
    price.innerHTML = `<sup>₹</sup>${rndInt}`;
  }

  price.style.fontFamily = `Verdana, Geneva, Tahoma, sans-serif`;
});

rating.forEach((rating) => {
  if (window.location.pathname == "/toys.html") {
    const randomRating = random(999, 9999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/laptop.html") {
    const randomRating = random(249, 1499);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/gaming.html") {
    const randomRating = random(501, 4999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/fashion.html") {
    const randomRating = random(4999, 49999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/gadget.html") {
    const randomRating = random(899, 9999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/HomeDecor.html") {
    const randomRating = random(9999, 29999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/mobiles.html") {
    const randomRating = random(4999, 49999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/newFashion.html") {
    const randomRating = random(6999, 24999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/beauty.html") {
    const randomRating = random(6999, 24999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/kitchen.html") {
    const randomRating = random(4999, 24999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/smartwatches.html") {
    const randomRating = random(9999, 24999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/school.html") {
    const randomRating = random(4999, 19999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/games.html") {
    const randomRating = random(2999, 14999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/shoes.html") {
    const randomRating = random(4999, 24999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/jewellery.html") {
    const randomRating = random(4999, 9999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/camera.html") {
    const randomRating = random(9999, 24999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/t-shirt.html") {
    const randomRating = random(9999, 29999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/saree.html") {
    const randomRating = random(9999, 49999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/perfume.html") {
    const randomRating = random(24999, 49999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }

  if (window.location.pathname == "/furnitures.html") {
    const randomRating = random(2999, 9999);
    rating.innerHTML = `★★★★☆ <span style="color: black; font-size: 13px;font-family: cursive;">${randomRating}</span>`;
  }
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function visitPage() {
  const select = document.querySelectorAll("#select");
  select.forEach((option) => {
    option.addEventListener("change", function () {
      let selectedOption = this.options[this.selectedIndex].value;
      console.log(this.selectedIndex);

      if (this.selectedIndex == "0") {
        window.location.href = "index.html";
      }

      if (this.selectedIndex == "5") {
        window.location.href = "laptop.html";
      }

      if (this.selectedIndex == "6") {
        window.location.href = "gaming.html";
      }

      if (this.selectedIndex == "7") {
        window.location.href = "newFashion.html";
      }

      if (this.selectedIndex == "13") {
        window.location.href = "toys.html";
      }

      if (this.selectedIndex == "3") {
        window.location.href = "mobiles.html";
      }

      if (this.selectedIndex == "1") {
        window.location.href = "beauty.html";
      }

      if (this.selectedIndex == "8") {
        window.location.href = "kitchen.html";
      }

      if (this.selectedIndex == "12") {
        window.location.href = "smartwatches.html";
      }

      if (this.selectedIndex == "12") {
        window.location.href = "smartwatches.html";
      }

      if (this.selectedIndex == "9") {
        window.location.href = "jewellery.html";
      }

      if (this.selectedIndex == "2") {
        window.location.href = "camera.html";
      }

      if (this.selectedIndex == "10") {
        window.location.href = "perfume.html";
      }

      if (this.selectedIndex == "4") {
        window.location.href = "furnitures.html";
      }

      if (this.selectedIndex == "11") {
        window.location.href = "shoes.html";
      }
    });
  });
}
visitPage();

let count = 1;
const addToCart = document.querySelectorAll(".addToCart");
addToCart.forEach((cart) => {
  cart.style.position = "relative";
  cart.addEventListener("click", () => {
    let upadteCount = document.querySelectorAll(".upadteCount");
    upadteCount.forEach((plus) => {
      plus.innerHTML = count++;
      if (plus.classList.add("animate-button")) {
        plus.classList.remove("animate-button");
      } else {
        plus.classList.add("animate-button");
      }
    });
  });
});

if (window.location.pathname == "/index.html") {
  hideSign();
}

function hideSign() {
  let sideSignin = document.querySelector(".sideSignin");
  sideSignin.addEventListener("click", () => {
    let sideBar = document.querySelector(".sideBar");
    sideBar.style.display = "none";
    wrapper.style.display = "none";
    signPage.style.display = "flex";
    signPage2.style.display = "none";
    wrapper.style.opacity = "1";
    document.body.style.overflow = "scroll";
    let emailBox = document.querySelector(".emailBox");
    let sideButton = document.querySelector(".sideButton");
    let userName = document.querySelector("#userName");
    userName.innerHTML = `Hello, ${emailBox.value}`;
  });
}
let appendImg = document.getElementById("appendImg");
let imageTitle = document.getElementById("title");
let userRating = document.getElementById("userRating");
let imagePrice = document.getElementById("price");
const img = document.querySelectorAll("img");

if (window.location.pathname !== "/index.html") {
  let resource = document.querySelectorAll(".resource");
  resource.forEach((resource) => {
    resource.addEventListener("click", () => {
      localStorage.setItem("pathname", window.location.pathname);
      localStorage.setItem("imageSrc", resource.children[0].src);
      localStorage.setItem("title", resource.children[1].innerHTML);
      localStorage.setItem(
        "rating",
        resource.childNodes[5].childNodes[1].innerText
      );
      localStorage.setItem("price", resource.children[3].innerHTML);
      if (window.location.pathname == "/info.html") {
        img.disabled = true;
      }
      window.location.href = "info.html";
    });
  });
}

let storedSrc = localStorage.getItem("imageSrc");
let appendTitle = localStorage.getItem("title");
let appendRating = localStorage.getItem("rating");
let appendPrice = localStorage.getItem("price");

if (window.location.pathname == "/info.html") {
  appendImg.src = storedSrc;
  imageTitle.innerHTML = appendTitle;
  userRating.innerHTML = appendRating;
  imagePrice.innerHTML = appendPrice;
}

let popMessage = document.getElementById("popMessage");
if (window.location.pathname == "/info.html") {
  let wishlist = document.getElementById("wishlist");
  wishlist.addEventListener("click", () => {
    popMessage.innerHTML = "Please login first";
    setTimeout(() => {
      popMessage.style.display = "none";
    }, 2500);
    popMessage.style.display = "flex";
  });
}

if (window.location.pathname == "/info.html") {
  let collection = document.querySelector(".collection");
  let cart = document.getElementById("Cart");
  collection.children[1].children[5].children[0].addEventListener(
    "click",
    () => {
      let addedData = document.querySelector(".addedData");
      let cartImg = document.querySelector("#cartImg");
      let cartTitle = document.querySelector("#cartTitle");
      let cartPrice = document.querySelector("#cartPrice");
      cartImg.src = storedSrc;
      cartTitle.innerHTML = appendTitle;
      cartImg.innerHTML = cartImg.src;
      cartPrice.innerHTML = appendPrice;
      cart.addEventListener("click", () => {
        if ((addedData.style.display = "none")) {
          addedData.style.display = "flex";
        }
        let removeItem = document.getElementById("removeItem");
        removeItem.addEventListener("click", () => {
          addedData.style.display = "none";
        });
      });
    }
  );
}

let searchBox = document.getElementById("input1");
let search = document.getElementById("Search");

search.addEventListener("click", () => {
  img.forEach((img) => {
    let inputValue = document.getElementById("input1").value;
    if (inputValue == "") {
      search.disabled = true;
    } else {
      if (img.src.includes(inputValue) || img.className.includes(inputValue)) {
        img.click();
      }
      inputValue = "";
    }
  });
});
searchBox.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    search.click();
  }
});

if (window.location.pathname == "/info.html") {
  let buyNow = document.getElementsByClassName("mainButton")[1];
  buyNow.addEventListener("click", () => {
    popMessage.innerText = "Please login first";
    buyNow.style.backgroundColor = "rgb(242, 242, 242)";
    buyNow.style.border = "1px solid black";
    setTimeout((message) => {
      popMessage.style.display = "none";
      buyNow.style.backgroundColor = "orange";
      buyNow.style.border = "none";
    }, 2500);
  });
}

if (window.location.pathname !== "/index.html") {
  search.addEventListener("click", () => {
    img.forEach((img) => {
      if (img.className.includes(searchBox.value)) {
        console.log(img);
      }
    });
  });
}
