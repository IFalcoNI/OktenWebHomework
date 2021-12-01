// - Є масив :
let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];

// Створити під кожен елемент коремий блок. В цьому блоці, під кожну властивість, створити окремий блок. Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)


for (const iterator of courses) {
    let courses = document.createElement("div");
    courses.setAttribute("class", "courses");
    //
    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.innerHTML = iterator.title;
    //
    let titleBlock = document.createElement("div");
    titleBlock.appendChild(title);
    //
    let monthDuration = document.createElement("h3");
    monthDuration.setAttribute("class", "monthDuration");
    monthDuration.innerHTML = iterator.monthDuration + " months";
    //
    let hourDuration = document.createElement("h4");
    hourDuration.setAttribute("class", "hourDuration");
    hourDuration.innerHTML = iterator.hourDuration + " hours";
    //
    let durationBlock = document.createElement("div");
    durationBlock.setAttribute("class", "duration");
    durationBlock.append(monthDuration, hourDuration);
    //
  
    let modules = document.createElement("ul");
    modules.innerText = "Technologies";
    for (const module of iterator.modules) {
      let li = document.createElement("li");
      li.innerHTML = module;
      modules.appendChild(li);
    }
    //
    let price = document.createElement("h4");
    price.setAttribute("class", "price");
    price.innerHTML = "Price " + iterator.price;
    //
    let rating = document.createElement("h4");
    rating.setAttribute("class", "rating");
    rating.innerHTML = "Rating " + iterator.rating;
    //
    let avgResult = document.createElement("h3");
    avgResult.setAttribute("class", "avgResult");
    avgResult.innerHTML = "Average result " + iterator.avgResult;
    //
    let resultsBlock = document.createElement("div");
    resultsBlock.setAttribute("class", "results");
    resultsBlock.append(price, rating, avgResult);
    //
    courses.append(titleBlock, durationBlock, modules, resultsBlock);
    document.body.appendChild(courses);
  }