import React, {createContext, useState} from 'react'

export const datastore = createContext();



export const Context = (props) => {

  const [Home_data, setHome_data]  = useState([{
      img : "https://media.npr.org/assets/img/2022/02/25/gettyimages-1372620623_custom-4895d389987758c4dc1bfc6d5752ffd3eb55efc4-s800-c85.webp",
      subhead : "Ukraine-Russia War" ,
      content : "As the Russian military invasion of Ukraine has unfolded, so too has a humanitarian crisis that has forced civilians to flee their homes or take refuge in bomb shelters and subway stations throughout the country.",
      type : "Global",
      created : "22 Jan 2022",
      id : 1,
      detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
      

  }, {
    img : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/the_kashmir_files_india_today_1200x768.jpeg?9iO5.MJVVChTtq6dn8gyxpoH46QSaNmU&size=770:433",
    subhead : "The Kashmir Files" ,
    content : "Mind you, this film tells you nothing new. But tells you and reminds you and forces you to think why we can’t look at history in the eye without any shame. Makes you angry again as to why a Yasin Malik and Syed Ali Shah Geelani  ",
    type : "Bollywood",
    created : "5 Mar 2022",
    id : 2,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  }, {
    img : "https://www.aljazeera.com/wp-content/uploads/2022/03/food4.jpg?resize=770%2C513",
    subhead : "Rising Food Prices" ,
    content : "The UN’s February World Food Price Index, released on Friday, was essentially unchanged at 20.7% y/y vs 19.2% in January, perhaps surprisingly given the rampant rally in soft commodity prices such as corn and wheat. ",
    type : "Food",
    created : "2 Feb 2022",
    id : 3,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  }, {
    img : "https://img.etimg.com/thumb/msid-90052483,width-294,resizemode-4,imgsize-54540/up-exit-poll-results-2022-live-updates-akhilesh-yadav-mayawati-yogi-adityanath-bjp-sp-bsp-congress-uttar-pradesh-election.jpg",
    subhead : "UP Exit Polls 2022" ,
    content : "Exit poll projections were released by pollsters after polling concluded in the seventh and last phase of the Uttar Pradesh elections is nearing an end. Most of the pollsters, including Times Now, has predicted the BJP to come back power with a reduced majority. ",
    type : "Global",
    created : "9 Mar 2022",
    id : 4,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  },{
    img : "https://img.etimg.com/photo/msid-90085525/Tata.jpg",
    subhead : "Tata Digital seeks more funds from Tata Sons for expansion" ,
    content : "Negotiations with global firms have been delayed by geopolitical issues, and Tata Digital is understood to have sought working capital funds in recent weeks.",
    type : "Technology",
    created : "2 Feb 2022",
    id : 5,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
  }, {
    img : "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/03/kapil-show-1646713674.jpg",
    subhead : "#BoycottKapilShow trends on Twitter" ,
    content : "Director  Vivek Ranjan Agnihotri of The Kashmir Files, alleged on Twitter that The Kapil Sharma Show turned down his request to feature on the show for the promotions as the movie does not have big commercial star ",
    type : "Bollywood",
    created : "10 Mar 2022",
    id : 6,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
  }])

  const [HomeLandscape] = useState([{
    
    img : "https://www.talaviation.com/Talaviation/UploadFiles/pgallery/201612711253290.jpg",
    subhead : "Explore The World" ,
    content : "Working exclusively with the wholesale market, TAL Tourism is able to provide travel age",
    type : "Tourism",
    created : "17 Jan 2022",
    id : 7,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
        

  },{
    img : "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/15+Workout+Milestones+Every/woman+on+a+pull-up+bar-carousel.jpg",
    subhead : "Fitness Tips & Fitness Training" ,
    content : "Sculpt your core and build strong muscles with these fitness tips and training articles.",
    type : "Fitness",
    created : "15 Jan 2022",
    id : 8,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    


  }, {
    img : "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/03/620_1.jpg",
    subhead : "Shraddha Kapoor to kick start the next schedule" ,
    content : "Shraddha Kapoor is currently running a jam-packed schedule with multiple brand..",
    type : "Bollywood",
    created : "15 Mar 2022",
    id : 9,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  },{
    img : "https://feeds.abplive.com/onecms/images/uploaded-images/2022/03/07/e02af1bacddb0deb192294bd884b795e_original.jpg?impolicy=abp_cdn&imwidth=720",
    subhead : "PM Modi Asks Putin To Hold Direct Talks With Zelensky" ,
    content : "Prime Minister Narendra Modi on Monday spoke with Russian President Vladimir Putin ",
    type : "Global",
    created : "7 Mar 2022",
    id : 10,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  }])
  const [toppost] = useState([{
    img : "https://media.npr.org/assets/img/2022/02/25/gettyimages-1372620623_custom-4895d389987758c4dc1bfc6d5752ffd3eb55efc4-s800-c85.webp",
    subhead : "Ukraine-Russia War" ,
    content : "As the Russian military invasion of Ukraine has unfolded.....",
    type : "Global",
    created : "22 Jan 2022",
    id : 11,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
    

}, {
  img : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/the_kashmir_files_india_today_1200x768.jpeg?9iO5.MJVVChTtq6dn8gyxpoH46QSaNmU&size=770:433",
  subhead : "The Kashmir Files" ,
  content : "Mind you, this film tells you nothing new. But tells you ......  ",
  type : "Bollywood",
  created : "5 Mar 2022",
  id : 12,
  detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
  

}, {
  img : "https://www.aljazeera.com/wp-content/uploads/2022/03/food4.jpg?resize=770%2C513",
  subhead : "Rising Food Prices" ,
  content : "The UN’s February World Food Price Index, released on Friday.... ",
  type : "Food",
  created : "2 Feb 2022",
  id : 13,
  detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
  

}])

const [Tourism] = useState([
  {
    img : "https://www.talaviation.com/Talaviation/UploadFiles/pgallery/201612711253290.jpg",
    subhead : "Explore The World" ,
    content : "Working exclusively with the wholesale market, TAL Tourism is able to provide travel age",
    type : "Tourism",
    created : "17 Jan 2022",
    id : 14,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
  }, {
    img : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/4548135651_5991de6ede_b_1200x768.jpeg?qTNKPBBjXdTI_Kq1v_xp_cFq4irhTVdt&size=770:433",
    subhead : "Guwahati to Meghalaya" ,
    content : "Northeast Frontier Railway (NFR) is planning to introduce a Vistadome service between Assam and Meghalaya. Vistadome train coaches are designed to make the travel experience.",
    type : "Tourism",
    created : "17 Jan 2022",
    id : 15,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    


  },{
    img : "https://static.india.com/wp-content/uploads/2022/03/pjimage-2022-03-07T155433.134.jpg?impolicy=Medium_Widthonly&w=700&h=467",
    subhead : "Good News For Skywatchers! " ,
    content : "Rajasthan, India's first state, has launched night sky astro tourism in all 33 of its districts. One of the most appealing aspects of the product is that it will be administered by sky calendars, with the sky serving as the primary reference for setting the dates for such events.",
    type : "Tourism",
    created : "17 Jan 2022",
    id : 16,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  },{
    img : "https://www.financialexpress.com/wp-content/uploads/2022/03/Kerala-Tourism-02.jpg",
    subhead : "Kerala to focus on long-haul travellers, caravan tourism" ,
    content : "The state has also launched a major initiative to open up the whole of the state for tourists in a sustainable manner without disturbing the ecology.",
    type : "Tourism",
    created : "17 Jan 2022",
    id : 17,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  },{
    img : "https://www.aljazeera.com/wp-content/uploads/2021/07/000_9DN2XM.jpg?resize=770%2C513",
    subhead : "Ukraine crisis clouds Southeast Asia’s fragile tourism recovery" ,
    content : "A decline in Russian visitors is expected to hit Southeast Asian destinations like Phuket and Bali hard.",
    type : "Tourism",
    created : "17 Jan 2022",
    id : 18,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
    
  }



])
const [Fitness] = useState([
  {
    img : "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/01/home-exercise-yoga-mat-video-1296x728-header.jpg?w=1575",
    subhead : "Fitness Tips & Fitness Training" ,
    content : "Sculpt your core and build strong muscles with these fitness tips and training articles.",
    type : "Fitness",
    created : "15 Jan 2022",
    id : 19,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  }
,{
  img : "https://lmimirror3pvr.azureedge.net/static/media/24712/d5e48083-0b0d-4290-ad7f-c1e046907363/how-much-hiit-960x540.png",
  subhead : "HIIT Exerxise For Good Staminae" ,
  content : "Sculpt your core and build strong muscles with these fitness tips and training articles.",
  type : "Fitness",
  created : "15 Jan 2022",
  id : 20,
  detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
  


},{
  img : "https://fitnessvolt.com/wp-content/uploads/2019/04/push-up-750x474.jpg",
  subhead : "How To Do Push-Up (Chest)" ,
  content : "One of the best ways to train your shoulders without equipment is to perform handstand push-ups. Here's how you do it",
  type : "Fitness",
  created : "15 Jan 2022",
  id :21,
  detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
  
}, {
  img : "https://images.livemint.com/img/2021/06/24/1140x641/iStock-1150246541_1624523599761_1624523629472.jpg",
  subhead : "Hold Plank For Stronger Core " ,
  content : "Sculpt your core and build strong muscles with these fitness tips and training articles.",
  type : "Fitness",
  created : "15 Jan 2022",
  id :22,
  detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
  
}, {
  img : "https://cdn.mos.cms.futurecdn.net/pLaRi5jXSHDKu6WRydetBo.jpg",
  subhead : "Flat Bench-Press For Chest" ,
  content : "The key of course, is to isolate the muscle you are targeting, but the shoulder is still a key element of a fit lifestyle.",
  type : "Fitness",
  created : "15 Jan 2022",
  id : 23,
  detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
  }
])

  const [Technology] = useState([
    {
      img : "https://images.indianexpress.com/2022/03/Apple-iPhone-SE-5G.jpg",
      subhead : "Apple iPhone SE 5G buying guide" ,
      content : "Apple launched the new iPhone SE 5G globally last night and the new iPhone now comes with a faster processor",
      type : "Technology",
      created : "15 Jan 2022",
      id : 24,
      detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
      
  
    }
  ,{
    img : "https://images.indianexpress.com/2021/12/Hacking_NEW1.jpeg",
    subhead : "Hackers continue to target unpatched systems" ,
    content : "Log4j is a very common logging library used by applications across the world.",
    type : "Technology",
    created : "15 Jan 2022",
    id : 25,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
  
  
  },{
    img : "https://images.indianexpress.com/2022/03/Access7-vulnerability.jpg",
    subhead : "Massive security vulnerability could affect medical devices" ,
    content : "Three out of the seven vulnerabilities are rated as critical because they can be used by attackers to execute malicious code.",
    type : "Technology",
    created : "15 Jan 2022",
    id : 26,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
  }, {
    img : "https://images.indianexpress.com/2022/03/Apple-iPhone-SE-5G.jpg",
    subhead : "Apple iPhone SE 5G buying guide" ,
    content : "Apple launched the new iPhone SE 5G globally last night and the new iPhone now comes with a faster processor.",
    type : "Technology",
    created : "15 Jan 2022",
    id : 27,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  }, {
    img : "https://images.indianexpress.com/2021/12/Hacking_NEW1.jpeg",
    subhead : "Hackers continue to target unpatched systems" ,
    content : "Log4j is a very common logging library used by applications across the world.",
    type : "Technology",
    created : "15 Jan 2022",
    id : 28,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
  
  
  }])


  const [Bollywood] = useState([
    {
      img : "https://media2.bollywoodhungama.in/wp-content/uploads/2022/03/Trending-Bollywood-News-From-Hrithik-Roshan-and-Deepika-Padukone%E2%80%99s-Fighter-going-on-floors-in-September-to-Alia-Bhatt-making-her-Hollywood-debut-to-Fardeen-Khan-opening-up-about-his-absence-from-the-screen-here-are-today%E2%80%99.jpeg",
      subhead : "Trending Bollywood News" ,
      content : "Each day a lot of things happen in the world of Bollywood. From new film announcements to celebrities being spotted with their rumoured partners, to of course social engagements, Bollywood News, and celebrations.",
      type : "Bollywood",
      created : "15 Jan 2022",
      id : 29,
      detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
      
  
    },
    {
      img : "https://static.toiimg.com/thumb/msid-74849811,width-1200,height-900,resizemode-4/.jpg",
      subhead : "Libas announces campaign with Sara Ali Khan" ,
      content : "Indian fast fashion ethnic wear brand, Libas, is raising the bar for ethnic fashion lovers celebrities being spotted with their rumoured partners, to of course social engagements, Bollywood News, and ",
      type : "Bollywood",
      created : "15 Jan 2022",
      id : 30,
      detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
      
  

    },{
      img : "https://media2.bollywoodhungama.in/wp-content/uploads/2022/03/Florence-Pugh-in-talks-to-play-Princess-Irulan-in-Dune-sequel-480x360.jpg",
      subhead : "Trending Bollywood News" ,
      content : "Each day a lot of things happen in the world of Bollywood. From new film announcements to celebrities being spotted with their rumoured partners, to of course social engagements, Bollywood News, and celebrations.",
      type : "Bollywood",
      created : "15 Jan 2022",
      id : 31,
      detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
      


    }
  ,{
    img : "https://media2.bollywoodhungama.in/wp-content/uploads/2022/03/Trending-Bollywood-News-From-Hrithik-Roshan-and-Deepika-Padukone%E2%80%99s-Fighter-going-on-floors-in-September-to-Alia-Bhatt-making-her-Hollywood-debut-to-Fardeen-Khan-opening-up-about-his-absence-from-the-screen-here-are-today%E2%80%99.jpeg",
    subhead : "Trending Bollywood News" ,
    content : "Each day a lot of things happen in the world of Bollywood. From new film announcements to celebrities being spotted with their rumoured partners, to of course social engagements, Bollywood News, and celebrations.",
    type : "Bollywood",
    created : "15 Jan 2022",
    id : 32,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  }, {
    img : "https://static.toiimg.com/thumb/msid-74849811,width-1200,height-900,resizemode-4/.jpg",
    subhead : "Libas announces campaign with Sara Ali Khan" ,
    content : "Indian fast fashion ethnic wear brand, Libas, is raising the bar for f things happen in the world of Bollywood. From new film announcements  ethnic fashion lover",
    type : "Bollywood",
    created : "15 Jan 2022",
    id : 33,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    


  }])

  const [Other] = useState([
    {
      img : "https://media.npr.org/assets/img/2022/02/25/gettyimages-1372620623_custom-4895d389987758c4dc1bfc6d5752ffd3eb55efc4-s800-c85.webp",
      subhead : "Ukraine-Russia War" ,
      content : "As the Russian military invasion of Ukraine has unfolded, so too has a humanitarian crisis that has forced civilians to flee their homes or take refuge in bomb shelters and subway stations throughout the country.",
      type : "Global",
      created : "22 Jan 2022",
      id : 34,
      detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
      
      

  },{
    img : "https://img.etimg.com/thumb/msid-90052483,width-294,resizemode-4,imgsize-54540/up-exit-poll-results-2022-live-updates-akhilesh-yadav-mayawati-yogi-adityanath-bjp-sp-bsp-congress-uttar-pradesh-election.jpg",
    subhead : "UP Exit Polls 2022" ,
    content : "Exit poll projections were released by pollsters after polling concluded in the seventh and last phase of the Uttar Pradesh elections is nearing an end. Most of the pollsters, including Times Now, has predicted the BJP to come back power with a reduced majority. ",
    type : "Global",
    created : "9 Mar 2022",
    id : 35,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
  

  },{
    img : "https://feeds.abplive.com/onecms/images/uploaded-images/2022/03/07/e02af1bacddb0deb192294bd884b795e_original.jpg?impolicy=abp_cdn&imwidth=720",
    subhead : "PM Modi Asks Putin To Hold Direct Talks With Zelensky" ,
    content : "Prime Minister Narendra Modi on Monday spoke with Russian President Vladimir Putin on the ongoing crisis in Ukraine and urged Putin to hold direct talks with Ukrainian President Zelensky, as reported by news agency ANI. ",
    type : "Global",
    created : "7 Mar 2022",
    id : 36,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  },{
    img : "https://img.etimg.com/thumb/msid-90052483,width-294,resizemode-4,imgsize-54540/up-exit-poll-results-2022-live-updates-akhilesh-yadav-mayawati-yogi-adityanath-bjp-sp-bsp-congress-uttar-pradesh-election.jpg",
    subhead : "UP Exit Polls 2022" ,
    content : "Exit poll projections were released by pollsters after polling concluded in the seventh and last phase of the Uttar Pradesh elections is nearing an end. Most of the pollsters, including Times Now, has predicted the BJP to come back power with a reduced majority. ",
    type : "Global",
    created : "9 Mar 2022",
    id : 37,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    

  },{
    img : "https://media.npr.org/assets/img/2022/02/25/gettyimages-1372620623_custom-4895d389987758c4dc1bfc6d5752ffd3eb55efc4-s800-c85.webp",
    subhead : "Ukraine-Russia War" ,
    content : "As the Russian military invasion of Ukraine has unfolded, so too has a humanitarian crisis that has forced civilians to flee their homes or take refuge in bomb shelters and subway stations throughout the country.",
    type : "Global",
    created : "22 Jan 2022",
    id : 38,
    detail : "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."
    
}
  ])


  return (
   <datastore.Provider value={[Home_data,HomeLandscape, toppost, Tourism, Fitness, Technology, Bollywood, Other]}>
       {props.children}
   </datastore.Provider>
  )
}

