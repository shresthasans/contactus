## Unique HTML5 & CSS3 - Contact Us Page

### Getting Started

 1. Open `CMD`, go to folder where you store the projects file. Don't create folder for this project yet.
 2. `git` `clone` `https://github.com/shresthasans/contactus`
 3. It will create *gulp-fe-dev* folder and donwload all codes from Github.

*Once you have downloaded, follow below steps to restore all dependencies and project structure:*

 1. In the same CMD, run `cd contactus`
 2. Next, run `npm i` (`i` stands for `install`)
 3. Run `bower install`
 
Now, run `gulp` from same CMD window. It will open the project server: `http://localhost:7010/`

Continue working, as soon as you save - it will compile CSS, and Refresh HTML too.

#### Gulp Tasks
- `gulp` - Compiles the development files and generate the production ready files.
- `gulp styleguide` - Generate the styleguides with *styleguide* folder on root path.
- `gulp webstandards` - Validates whether your HTML/CSS/JS is up-to-date or not and or according to Web Standards.


#### File Structure

**Production Files:-**
```
	+-- dist
	|   +-- fonts
	|   +-- images
	|   +-- scripts
	|	|   +-- main.js
	|	|   +-- main.min.js
	|   +-- styles
	|	|   +-- main.css
	|	|   +-- main.min.css 
	|   +-- index.html //Minified
```

**Development Files:-**
```
	+-- src
	|   +-- fonts
	|   +-- images
	|   +-- libs
	|	|   +-- Dependencies 1
	|	|   +-- Dependencies 2
	|   +-- scripts
	|	|   +-- externals
	|	|	|   +-- Dependencies 1
	|	|	|   +-- Dependencies 2
	|	|   +-- scripts.js
	|   +-- styles
	|	|   +-- common
	|	|	|   +-- _layout.scss
	|	|	|   +-- _mixins.scss
	|	|	|   +-- _typo.scss
	|	|	|   +-- _variables.scss
	|	|   +-- components
	|	|	|   +-- _footer.scss
	|	|	|   +-- _forms.scss
	|	|	|   +-- _header.scss
	|	|	|   +-- _nav.scss
	|	|	|   +-- _siderbar.scss
	|	|	|   +-- _tables.scss
	|	|   +-- externals
	|	|	|   +-- Dependencies-1.scss
	|	|	|   +-- Dependencies-2.scss
	|	|   +-- modules
	|	|	|   +-- modules-name.scss
	|   +-- index.html
```

#### UI Resources/References
 - [Bootstrap V4](http://v4-alpha.getbootstrap.com)
 - [Gulp](https://www.npmjs.com/package/gulp)
 - [Gulp-sass](https://www.npmjs.com/package/gulp-sass)
 - [Gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
 - [Gulp-jshint](https://www.npmjs.com/package/gulp-jshint)
 - [Gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
 - [Gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
 - [Gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
 - [Gulp-rename](https://www.npmjs.com/package/gulp-rename)
 - [Gulp-concat](https://www.npmjs.com/package/gulp-concat)
 - [Gulp-notify](https://www.npmjs.com/package/gulp-notify)
 - [Gulp-cache](https://www.npmjs.com/package/gulp-cache)
 - [Gulp-sc5-styleguide](https://github.com/SC5/sc5-styleguide)
 - [Gulp-webserver](https://www.npmjs.com/package/gulp-webserver)
 - [Gulp-webstandards](https://www.npmjs.com/package/gulp-webstandards)
 - [del](https://www.npmjs.com/package/del)
 - [BEM](https://en.bem.info)
 - [SMACSS](https://smacss.com)

#### About Me
I'm a certified HFI CUA™, self learned and accidently turned Designer/Developer, have bachelor's degree in English Literature and Sociology and six plus years of experience, been with start-ups and medium to large tech companies and created huge impact on leading product definition and development, improving user-experience in B2B and B2C software products.

I've been described as an analytic thinker, creative problem-solver, and detail-oriented UX/UI practitioner. I balance user needs with the business goals. My years of experience and skills set me apart as a highly qualified design professional. 

| Name     | Sanjay Shrestha                     |
|----------|-------------------------------------|
| Email    | dziner.sanjay@gmail.com             |
| Facebook | http://facebook.com/dziner.sanjay   |
| LinkedIn | http://linkedin.com/in/shresthasans |
| Twitter  | http://twitter.com/shresthasans     |
| Skype    | sanzaysan                           |
| Behance  | http://behance.net/shresthasans     |


