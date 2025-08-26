const statesData = [
  {
    name: "Andhra Pradesh",
    image: "https://thumbs.dreamstime.com/b/paddy-fields-landscape-andhra-pradesh-india-80772299.jpg",
    description: "Coastal ecosystems and biodiversity-rich Eastern Ghats.",
  },
  {
    name: "Arunachal Pradesh",
    image: "https://media.istockphoto.com/id/1323555810/photo/morning-sunrise-view.jpg?s=612x612&w=0&k=20&c=bQgY62S2xnaK9ME344q2JIY4vJoCUfWBeVEi9WNozDM=",
    description: "A biodiversity hotspot with pristine forests and rivers.",
  },
  {
    name: "Assam",
    image: "https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/as8--78ae56.png",
    description: "Home to Kaziranga and rich tea garden landscapes.",
  },
  {
    name: "Bihar",
    image: "https://tripxl.com/blog/wp-content/uploads/2025/02/Ghora-Katora-Lake.jpg",
    description: "Sacred rivers and green revival initiatives.",
  },
  {
    name: "Chhattisgarh",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-chitrakote-waterfall-jagdalpur-city-hero?qlt=82&ts=1726738411056",
    description: "Forests and waterfalls at the heart of India.",
  },
  {
    name: "Goa",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/cola-beach-goa-blog-ntr-hero?qlt=82&ts=1726735623951",
    description: "Ecotourism, beaches, and mangrove conservation.",
  },
  {
    name: "Gujarat",
    image: "https://www.gujaratexpert.com/blog/wp-content/uploads/2023/11/Polo-Forest.jpg",
    description: "Explore Gujarat's rich biodiversity and eco-initiatives.",
  },
  {
    name: "Haryana",
    image: "https://media.holidify.com/images/cmsuploads/compressed/navbharat-times_20241203093706.jpg",
    description: "Rapid development with growing environmental focus.",
  },
  {
    name: "Himachal Pradesh",
    image: "https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=",
    description: "Mountain ecology and sustainable hill tourism.",
  },
  {
    name: "Jharkhand",
    image: "https://www.akshartours.com/wp-content/uploads/2020/06/best-time-to-visit-Jharkhand-01.jpg",
    description: "Dense forests and mineral-rich green cover.",
  },
  {
    name: "Karnataka",
    image: "https://karnatakatourism.org/wp-content/uploads/2020/06/P14-gallery.jpg",
    description: "Western Ghats biodiversity and eco-protection zones.",
  },
  {
    name: "Kerala",
    image: "https://static.toiimg.com/photo/msid-89747605,width-96,height-65.cms",
    description: "The lush green land of Ayurveda and nature preservation.",
  },
  {
    name: "Madhya Pradesh",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/10/25153527/madhya-pradesh-top-destinations-places-to-visit-shutterstock_1351065545-1200x700-compressed.jpg",
    description: "Tiger reserves and ancient forest sanctuaries.",
  },
  {
    name: "Maharashtra",
    image: "https://media.istockphoto.com/id/1060805460/photo/a-grid-on-the-fort.jpg?s=612x612&w=0&k=20&c=Cx0JScsvXwp8w5eEIXi9kzux0wpxhB117zY13GpGb78=",
    description: "From the Western Ghats to urban conservation programs.",
  },
  {
    name: "Manipur",
    image: "https://www.odysseyexplore.com/tours/images/manipur-slide-1.jpg",
    description: "Floating national parks and serene lakes.",
  },
  {
    name: "Meghalaya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMgBp7F5yJIcp0ysx1YTrQtTpBVX2cAx2bQ&s",
    description: "Living root bridges and highest rainfall zones.",
  },
  {
    name: "Mizoram",
    image: "https://www.mizoramtourism.com/post_images/62ade53b5ba1a_Hlimen%20Park.jpg",
    description: "Forests, hills, and eco-sensitive tribal traditions.",
  },
  {
    name: "Nagaland",
    image: "https://ihplb.b-cdn.net/wp-content/uploads/2024/03/best-places-to-visit-in-march-in-nagaland.jpg",
    description: "Lush greenery and community forest management.",
  },
  {
    name: "Odisha",
    image: "https://www.heritagetoursorissa.com/wp-content/uploads/2024/02/Exploring-Odisha-with-Trusted-Odisha-Tour-Operators.jpg",
    description: "Chilika lake, forests, and turtle nesting grounds.",
  },
  {
    name: "Punjab",
    image: "https://thenomadicguy.wordpress.com/wp-content/uploads/2014/02/makalu-barun-national-park-punjab.jpg",
    description: "Agricultural plains and sustainability in farming.",
  },
  {
    name: "Rajasthan",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Colours_of_nature_at_Rajasthan.jpg",
    description: "Desert ecology and water conservation marvels.",
  },
  {
    name: "Sikkim",
    image: "https://www.sikkimtourismindia.com/blog/wp-content/uploads/2022/05/sikkim-nature.jpg",
    description: "India's first organic state with majestic mountains.",
  },
  {
    name: "Tamil Nadu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf4iai3aMfmeJYBfrqNAbZy4mbpGvt2eMVw&s",
    description: "Coastal zones, hills, and sacred groves.",
  },
  {
    name: "Telangana",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/18075827/Telangana4.png",
    description: "Deccan landscape with forest restoration projects.",
  },
  {
    name: "Tripura",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ855ky2hqSgb0z3-ext-HkSdFQ3kjdfTOw&s",
    description: "Forests, lakes, and tribal ecological knowledge.",
  },
  {
    name: "Uttar Pradesh",
    image: "https://media2.thrillophilia.com/images/photos/000/189/922/original/1579692692_shutterstock_1029897754.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
    description: "Sacred rivers, wetlands, and urban greenery.",
  },
  {
    name: "Uttarakhand",
    image: "https://www.trawell.in/admin/images/upload/533080799Valley_of_Flowers_Main.jpg",
    description: "Himalayan forests, national parks, and eco-spiritualism.",
  },
  {
    name: "West Bengal",
    image: "https://i.pinimg.com/736x/87/69/87/876987a5818b49e95c6aab5fa1f45afa.jpg",
    description: "Sundarbans delta and diverse ecological zones.",
  },
];

export default statesData;
