const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const db = require('../models');

// This file empties the database and inserts new users and snips.
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/snippit', {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// Used to add snips for each user.
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const userSeed = [
  {
    username: 'tylerkennedy',
    password: 'Password1',
  },
  {
    username: 'joeybruno',
    password: 'Password1',
  },
  {
    username: 'brandoncansler',
    password: 'Password1',
  },
  {
    username: 'dumbledore',
    password: 'Password1',
  },
  {
    username: 'voldemort',
    password: 'Password1',
  },
  {
    username: 'harrypotter',
    password: 'Password1',
  },
  {
    username: 'hermoinegranger',
    password: 'Password1',
  },
  {
    username: 'ronweasley',
    password: 'Password1',
  },
  {
    username: 'ginnyweasley',
    password: 'Password1',
  },
  {
    username: 'dracomalfoy',
    password: 'Password1',
  }
];

userSeed.forEach(user => {
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
})

const snipSeed = [
  {
    question: {
      isResponse: false,
      tagLine: 'How to manually trigger click event in ReactJS?',
      body: 'How can I manually trigger a click event in ReactJS? When a user clicks on element1, I want to automatically trigger a click on the input tag.',
      code: `<div className="div-margins logoContainer">
  <div id="element1" className="content" onClick={this.uploadLogoIcon}>
    <div className="logoBlank" />
  </div>
  <input accept="image/*" type="file" className="hide"/>
</div>`,
      language: 'html',
    },
    responses: [
      {
        isResponse: true,
        body: 'You could use the ref prop to acquire a reference to the underlying HTMLInputElement object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the HTMLElement.click method. In your render method:',
        code: `<input ref={input => this.inputElement = input} ... />,`,
        language: 'html'
      },
      {
        isResponse: true,
        body: 'Try this and let me know if it does not work on your end:',
        code: `<input type="checkbox" name='agree' ref={input => this.inputElement = input}/>
<div onClick={() => this.inputElement.click()}>Click</div>`,
        language: 'html'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'Remove Underline Border Materialize Input Text',
      body: 'I try to make the border bottom of the text box (input text) disappear. It\'s working with border-bottom: none but when I write something the border appear again. I want to make the green line disappear (the image show the page when I\'m writing in the input). Any idea?',
      code: '',
      language: 'css',
    },
    responses: [
      {
        isResponse: true,
        body: 'In materialize.css:',
        code: `textarea:focus {
  border-bottom: 1px solid #03a9f4;
  -webkit-box-shadow: 0 1px 0 0 #03a9f4;
  -moz-box-shadow: 0 1px 0 0 #03a9f4;
  box-shadow: 0 1px 0 0 #03a9f4;
}`,
        language: 'css'
      },
      {
        isResponse: true,
        body: 'what you see is outline no border.For Fix it use outline: none;',
        code: `input[type="text"] {
  border-bottom: none;
  outline: none;
}`,
        language: 'css'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'Fix footer to bottom of page',
      body: 'Although most pages on my site have enough content to push the footer to the bottom of the page for most people. I would like to know it\'s always fixed to the bottom regardless of screen size from now on anyway. I\'ve tried a number of ways such as bottom: 0x; position:absolute: etc. Never seems to work very well, occasionally pushes the footer out of its container to fix to the bottom using some of those examples right there. Included is the HTML and CSS for the two parts of the footer (footer & copyright bar). They\'re both inside of a <section id="footer"> div anyway.',
      code: `<section id="footer">
  <div class="container">
    <div class="row">
      <div class="span1">
        <div id="small-logo">
          <img src="img/small-logo.png" />
        </div>
      </div>
      <div class="span2">
        <div class="footer-list">
          <h6>OUR BOXES</h6>
          <ul>
            <a href="#">
              <li>Classic Box</li>
            </a>
            <a href="#">
              <li>Vegetarian Box</li>
            </a>
            <a href="#">
              <li>Family Box</li>
            </a>
            <a href="#">
              <li>Dinner Party Box</li>
            </a>
            <a href="#">
              <li>Gift Box</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="span2">
        <div class="footer-list">
          <h6>OUR RECIPES</h6>
          <ul>
            <a href="#">
              <li>Last Weeks Feature</li>
            </a>
            <a href="#">
              <li>Next Weeks Feature</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="span2">
        <div class="footer-list">
          <h6>ABOUT US</h6>
          <ul>
            <a href="#">
              <li>The Food</li>
            </a>
            <a href="#">
              <li>How We Sourcex</li>
            </a>
            <a href="#">
              <li>Sustainability</li>
            </a>
            <li><a href="about.html">About Us</a></li>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="span5">
        <div id="twitter">
          <img src="img/twitter-logo.png" alt="" title="" height="50" width="50" class="twitter-logo" />
          <div class="tweet-bg">
            <div class="tweets">
              <p>@chefallanp that's just not on really</p>
            </div>
            <div id="follow-btn">
              <img src="img/follow-us.jpg" />
            </div>
          </div>
        </div>
        <div class="checkout-options">
          <h6>SECURE CHECKOUT</h6>
          <ul>
            <li><img src="img/solo-logo.png" /></li>
            <li><img src="img/switch-logo.png" /></li>
            <li><img src="img/maestro-logo.png" /></li>
            <li><img src="img/visa-logo.png" /></li>
            <a href="#">
              <li><img src="img/facebook-logo.png" /></li>
            </a>
            <a href="#">
              <li><img src="img/twitter-logo-flat.png" /></li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div id="copyright-bar">
  <div class="container">
    <div class="row">
      <div class="copyright-content">
        <div class="span4">
          <p>The Naked Radish Limited. 2013 All rights reserved.</p>
        </div>
        <div class="span4 offset4">
          <div class="copyright-list">
            <ul>
              <a href="terms.html">
                <li>Terms &amp; Conditions</li>
              </a>
              <a href="privacy.html">
                <li> - Privacy Policy</li>
              </a>
              <a href="#">
                <li> - Cookie Policy</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      language: 'html',
    },
    responses: [
      {
        isResponse: true,
        body: 'We can use FlexBox for Sticky Footer and Header without using POSITIONS in CSS.',
        code: `<div class="container">
  <header>HEADER</header>
  <main class="content">

  </main>
  <footer>FOOTER</footer>
</div>`,
        language: 'html'
      },
      {
        isResponse: true,
        body: 'Like this add position:fixed; and bottom:0; below the selector #footer:',
        code: `#footer {
    background-color: #F3F3F3;
    padding-top: 10px;
    padding-bottom: 0px;
    position:fixed;
    bottom:0;
    width:100%;
}`,
        language: 'css'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'How can I transition height: 0; to height: auto; using CSS?',
      body: 'I am trying to make a <ul> slide down using CSS transitions. The <ul> starts off at height: 0;. On hover, the height is set to height:auto;. However, this is causing it to simply appear, not transition, If I do it from height: 40px; to height: auto;, then it will slide up to height: 0;, and then suddenly jump to the correct height. How else could I do this without using JavaScript?',
      code: `#child0 {
  height: 0;
  overflow: hidden;
  background-color: #dedede;
  -moz-transition: height 1s ease;
  -webkit-transition: height 1s ease;
  -o-transition: height 1s ease;
  transition: height 1s ease;
}
#parent0:hover #child0 {
  height: auto;
}
#child40 {
  height: 40px;
  overflow: hidden;
  background-color: #dedede;
  -moz-transition: height 1s ease;
  -webkit-transition: height 1s ease;
  -o-transition: height 1s ease;
  transition: height 1s ease;
}
#parent40:hover #child40 {
  height: auto;
}
h1 {
  font-weight: bold;
}`,
      language: 'css',
    },
    responses: [
      {
        isResponse: true,
        body: 'Use max-height in the transition and not height. And set a value on max-height to something bigger than your box will ever get.',
        code: `#menu #list {
    max-height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    background: #d5d5d5;
}

#menu:hover #list {
    max-height: 500px;
    transition: max-height 0.25s ease-in;
}`,
        language: 'css'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'Is there a CSS parent selector?',
      body: 'How do I select the <li> element that is a direct parent of the anchor element? As an example, my CSS would be something like this:',
      code: `li < a.active {
    property: value;
}`,
      language: 'css',
    },
    responses: [
      {
        isResponse: true,
        body: 'There is currently no way to select the parent of an element in CSS. If there was a way to do it, it would be in either of the current CSS selectors specs: Selectors Level 3 Spec CSS 2.1 Selectors Spec That said, the Selectors Level 4 Working Draft includes a :has() pseudo-class that will provide this capability. It will be similar to the jQuery implementation.',
        code: `li:has(> a.active) { /* styles to apply to the li tag */ }`,
        language: 'css'
      },
      {
        isResponse: true,
        body: 'I don’t think you can select the parent in CSS only. But as you already seem to have an .active class, it would be easier to move that class to the li (instead of the a). That way you can access both the li and the a via CSS only.',
        code: ``,
        language: 'css'
      },
      {
        isResponse: true,
        body: 'There is no parent selector; just the way there is no previous sibling selector. One good reason for not having these selectors is because the browser has to traverse through all children of an element to determine whether or not a class should be applied. For example, if you wrote:',
        code: `body:contains-selector(a.active) { background: red; }`,
        language: 'css'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'How do I preserve line breaks when getting text from a textarea?',
      body: 'I am getting the value in a textarea when the user hits submit. I then take this value and place it elsewhere on the page. However, when I do this, it loses newline characters making the output pretty ugly.',
      code: `var post = document.createElement('p');
var postText = document.getElementById('post-text').value;
post.append(postText);
var card = document.createElement('div');
card.append(post);
var cardStack = document.getElementById('#card-stack');
cardStack.prepend(card);`,
      language: 'javascript',
    },
    responses: [
      {
        isResponse: true,
        body: 'The easiest solution is to simply style the element you\'re inserting the text into with the following CSS property:',
        code: `white-space: pre-wrap;`,
        language: 'css'
      },
      {
        isResponse: true,
        body: 'If you really want to do this without using the CSS white-space property, an alternative solution would be to explicitly replace any newline characters in the text with <br> HTML tags. The tricky part is that, to avoid introducing subtle bugs and potential security holes, you have to first escape any HTML metacharacters (at a minimum, & and <) in the text before you do this replacement. Probably the simplest and safest way to do that is to let the browser handle the HTML-escaping for you, like this:',
        code: `var post = document.createElement('p');
post.textContent = postText;
post.innerHTML = post.innerHTML.replace(/\n/g, '<br>\n');`,
        language: 'javascript'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'Can\'t perform a React state update on an unmounted component',
      body: 'I am writing an application in React and was unable to avoid a super common pitfall, which is calling setState(...) after componentWillUnmount(...). I looked very carefully at my code and tried to put some guarding clauses in place, but the problem persisted and I am still observing the warning.',
      code: `import { throttle } from 'lodash';
import * as React from 'react';
import { AutoWidthPdf } from '../shared/AutoWidthPdf';
import BookCommandPanel from '../shared/BookCommandPanel';
import BookTextPath from '../static/pdf/sde.pdf';
import './Book.css';

const DEFAULT_WIDTH = 140;

class Book extends React.Component {
  setDivSizeThrottleable: () => void;
  pdfWrapper: HTMLDivElement | null = null;
  isComponentMounted: boolean = false;
  state = {
    hidden: true,
    pdfWidth: DEFAULT_WIDTH,
  };

  constructor(props: any) {
    super(props);
    this.setDivSizeThrottleable = throttle(
      () => {
        if (this.isComponentMounted) {
          this.setState({
            pdfWidth: this.pdfWrapper!.getBoundingClientRect().width - 5,
          });
        }
      },
      500,
    );
  }

  componentDidMount = () => {
    this.isComponentMounted = true;
    this.setDivSizeThrottleable();
    window.addEventListener("resize", this.setDivSizeThrottleable);
  };

  componentWillUnmount = () => {
    this.isComponentMounted = false;
    window.removeEventListener("resize", this.setDivSizeThrottleable);
  };

  render = () => (
    <div className="Book">
      { this.state.hidden && <div className="Book__LoadNotification centered">Book is being loaded...</div> }

      <div className={this.getPdfContentContainerClassName()}>
        <BookCommandPanel
          bookTextPath={BookTextPath}
          />

        <div className="Book__PdfContent" ref={ref => this.pdfWrapper = ref}>
          <AutoWidthPdf
            file={BookTextPath}
            width={this.state.pdfWidth}
            onLoadSuccess={(_: any) => this.onDocumentComplete()}
            />
        </div>

        <BookCommandPanel
          bookTextPath={BookTextPath}
          />
      </div>
    </div>
  );

  getPdfContentContainerClassName = () => this.state.hidden ? 'hidden' : '';

  onDocumentComplete = () => {
    try {
      this.setState({ hidden: false });
      this.setDivSizeThrottleable();
    } catch (caughtError) {
      console.warn({ caughtError });
    }
  };
}

export default Book;`,
      language: 'javascript',
    },
    responses: [
      {
        isResponse: true,
        body: 'To remove - Can\'t perform a React state update on an unmounted component warning, use componentDidMount method under a condition and make false that condition on componentWillUnmount method. For example : -',
        code: `class Home extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;

    ajaxVar
      .get('https://domain')
      .then(result => {
        if (this._isMounted) {
          this.setState({
            news: result.data.hits,
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    ...
  }
  }`,
        language: 'javascript'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'Footer below content, but not floating mid-air if not enough content',
      body: 'It\'s kind of the very basic of what I have, but you\'ll get the point. As you can see the footer is positioned somewhere mid-air. I could position it absolute and make it sticky easily, but for various reasons I do not want that.',
      code: `<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
  </nav>
    <div class="container">
        <p>Here comes some content.</p>
        <p>Here comes some content.</p>
        <p>Here comes some content.</p>
        <p>Here comes some content.</p>
        <p>Here comes some content.</p>
    </div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <p>Some footer-content</p>
                    <p>Some footer-content</p>
                    <p>Some footer-content</p>
                </div>
                <div class="col-md-4">
                    <p>Some footer-content</p>
                    <p>Some footer-content</p>
                </div>
            </div>
        </div>
    </footer>`,
      language: 'html',
    },
    responses: [
      {
        isResponse: true,
        body: 'This is the easiest way I have found to make a good footer. Wrap everything but your footer in a "wrapper" div. Then set your html and body height to 100%, with a min-height of 100% on your wrapper. Next, you need to give a bottom margin and bottom padding to this wrapper that is the same height as your footer. It works like a charm.',
        code: `html, body {
    height: 100%;
}
.wrapper {
    min-height: 100%;
    margin-bottom: -100px;
    padding-bottom: 100px;
}
footer {
    height: 100px;
}`,
        language: 'css'
      },
      {
        isResponse: true,
        body: 'If the height of the footer is unknown, it\'s best to use flex, something in the lines of:',
        code: `<body>
    <header></header>
    <div class="content"></div>
    <footer></footer>
</body>`,
        language: 'html'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'Basic explanation of python functions',
      body: 'I have a basic question below to help try get my head around functions in python (following the LPTHW tutorials in prep for uni). Could someone explain the syntax below, and whether I am correct with my assumptions?',
      code: `def print_two_again(arg1, arg2):
    print "arg1: %r, arg2: %r" % (arg1, arg2)

print_two_again("Steve","Testing")`,
      language: 'python',
    },
    responses: [
      {
        isResponse: true,
        body: 'In this case, arg1 and arg2 are called arguments. Arguments allow functions to receive inputs it\'s expected to use in order to perform a task. The inputs are provided by the callers. For example, in school math, you may\'ve already seen things like z = f(x, y) where a function named f is defined as f(x, y) = x + y. This is the same concept in a programming language. It also allows you do write more generic, flexible, and reusable code. For example, you don\'t have to write many different versions of a function to accomplish the same task with slightly different results, avoiding situations like add2(x, y) = x + y and add3(x, y, z) = x + y + z, and so on. You can simply do something like:',
        code: `def sum(values):  # values is of type 'list'
    result = 0
    for value in values:
        result += value
    return result`,
        language: 'python'
      }
    ]
  },
  {
    question: {
      isResponse: false,
      tagLine: 'how to minimize the time taken by NLTK in python to get data nouns and verbs from text in oracle database?',
      body: 'I am using NLTK in python to get nouns and verbs form text which is in the database columns. But I have around three million records and its taking too much time to get the nouns and verbs from the database text data and then to ingest the nouns and verbs into the table. How can I reduce this time? I there any way to fetch nouns and verbs from text in less time? Below is my python code :',
      code: `import json
from builtins import print

from apscheduler.schedulers.blocking import BlockingScheduler
import cx_Oracle
import pandas as pd
from elasticsearch import helpers, Elasticsearch
import string
from typing import List, Any, Union
from collections import Counter
import nltk.tokenize as nt
import nltk
import re

def function_togetNounsAndVerbs(text) :
  lower_case = text.lower()
  print('lower_case :- ', lower_case)

  lower_case = re.sub(r"\)", " ", lower_case)
  lower_case = re.sub(r"\(", " ", lower_case)
  lower_case = re.sub(r",", " ", lower_case)
  print('lower_case :-  After Removing ( and ) : ---- ', lower_case)
  tokens = nt.word_tokenize(lower_case)
  #print('tokens :-', tokens)

  tokenized_sent: List[List[Union[str, Any]]] = [nt.word_tokenize(token) for token in tokens]

  pos_sentences: List[Any] = [nltk.pos_tag(pos) for pos in tokenized_sent]
  print('pos_sentences :- ', pos_sentences)
  word_tag: object
  noun_list = []
  verb_list = []
  for word_tag in pos_sentences:
  String = str(word_tag[0])
  stripped = String.strip("() '' ', '")
  temp = stripped.replace("'", "")
  splitted = temp.split(',')

  for i in range(0, 2):
    if i == 0:
    word: str = splitted[i].strip()
    elif i == 1:
    pos: str = splitted[i].strip()
    pos = pos.strip()
    if (pos == "NN" or pos == 'NNS' or pos == 'NNP' or pos == 'NNPS'):
      noun_list.append(word)
    elif (pos == 'VB' or pos == 'VBD' or pos == 'VBG' or pos == 'VBN' or pos == 'VBP' or pos == 'VBZ'):
      verb_list.append(word)
  return verb_list, noun_list

def export_dataFrom_DB() :
  print("rohini_1")
  connection = cx_Oracle.connect("userabcd/dabba@dl0123dob2920.vanhelsing-n20789.xyz.com:1289/dobbi1")
  cursor = connection.cursor()
  query = """select * from POS_nous_verbs_otherdata where  FLAGOFPROCESS is null"""

  print("query  ==== ",query)
  SQL_query=pd.read_sql_query(query,connection)
  print('SQL_query   ==> ',SQL_query)
  df=pd.DataFrame(SQL_query, columns=['COMMONID', 'TITLE','OBJECT_SUMMARY'] )
  print("COMMONID   -  TITLE  -   OBJECT_SUMMARY ")
  verbList=[]
  nounList=[]
  for index, row in df.iterrows():
    print(row['COMMONID'],  row['TITLE'],  row['OBJECT_SUMMARY'])
    Objectsummary = row['OBJECT_SUMMARY']
    Title=row['TITLE']
    if Title is None:
    Title = ""
    if Objectsummary is None:
    Objectsummary = ""
    allSummeries =Title  + ' ' + Objectsummary
    COMMONID=row['COMMONID']
    print("COMMONID : - ",COMMONID,"   allSummeries-------------- > ",allSummeries)
    lists=function_togetNounsAndVerbs(allSummeries)
    verbList =lists[0]
    nounList =lists[1]

    NounSet = set(nounList)
    VerbSet = set(verbList)

    print("NounSet --------> ", NounSet)
    print("VerbSet --------> ", VerbSet)

    # initialize an empty string
    verbs = " "
    verbs=verbs.join(VerbSet)

    nouns=" "
    nouns=nouns.join(NounSet)


    verbs=re.sub(r" ", ", ", verbs)
    nouns=re.sub(r" ", ", ", nouns)
    print("  verbs      : : : - ",verbs)
    print("  nouns      : : : - ", nouns)

    statement = """UPDATE POS_nous_verbs_otherdata SET NOUNS = :1, Verbs = :2, FLAGOFPROCESS =:3  where COMMONID = :4 and FLAGOFPROCESS is null"""
    a = cursor.execute(statement, (nouns, verbs, 'PROCESSED', COMMONID))
    print("id  :  ",COMMONID)
    connection.commit()

export_dataFrom_DB()

scheduler = BlockingScheduler()
scheduler.add_job(export_dataFrom_DB, 'interval', seconds=100)
scheduler.start()`,
      language: 'python',
    },
    responses: []
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(async data => {
    console.log(data.result.n + ' records inserted!');

    await db.Snip.remove({});
    const users = await db.User.find();

    await asyncForEach(users, async (user, index) => {
      let question = snipSeed[index].question;
      question.userId = user._id;
      await db.Snip
        .create(question)
        .then(async dbSnip => {
          console.log('SNIP CREATED: ', dbSnip);

          await db.User
            .findOneAndUpdate({ _id: user._id }, { $push: { snips: dbSnip._id }}, { new: true })
            .then(async user => {
              const responses = snipSeed[index].responses;

              await asyncForEach(responses, async (response) => {
                const random = userSeed[Math.floor(Math.random() * 10)]._id;
                response.userId = random;
                await db.Snip
                  .create(response)
                  .then(async res => {
                    await db.Snip
                      .findOneAndUpdate({ _id: dbSnip._id}, { $push: { responses: res._id }}, {new: true })
                      .then(data => { console.log('UPDATED SNIP: ', data)})
                  })
              })
            })
        })
        .catch(err => console.log(err))
    });

    console.log('EXIT');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
