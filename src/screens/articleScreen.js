import React, { useEffect} from 'react'
import {detailsArticle} from '../action/homeAction'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'github-markdown-css';
import MarkdownView from 'react-showdown';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
// import Header from '../component/navbar'




function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

function ArticleScreen(props){

    const articleDetails = useSelector(state=>state.articleDetails)
    const {articles, loading, error} = articleDetails

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsArticle(props.match.params.id))

        return()=>{

        }
    },[])


    return <div>

        

        <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
              <div className="articles-header-a">     
                    Hemant </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
        
            {loading? <div>Loading..</div>:
            error? <div>{error}</div>:
            (

                
                <div className='container-sm'>
                    <div className="container-md">
                    <img src={articles.cover_image}class="img-fluid" alt="Responsive image"/>
                    </div>
                   
                <div className="main">
                   <ul>
                    <li className="title-article" >
                        <h2>
                            {articles.title}
                        </h2>
                    </li>



                   </ul>
                   
                    </div>

                    <div className="body">
                    <div class="markdown-body">

                    <MarkdownView
                        markdown={articles.body_markdown}
                        options={{ tables: true, emoji: true }}
                     />
                    </div>
                    </div>


                    


                    </div>
            )}



    </div>
}

export default ArticleScreen;