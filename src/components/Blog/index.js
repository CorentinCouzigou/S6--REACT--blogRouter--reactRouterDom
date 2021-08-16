// == Import
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Spinner from 'src/components/Spinner';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
class Blog extends React.PureComponent {
  state = {
    zenMode: false,
    loading: false,
    Data: [],
  }
loadData = () => {
this.setState({loading:true});
 setTimeout(() => {
   this.setState({loading:false});
   this.setState({Data:postsData})
   
 },2000)

};
getPostsByCategory = (category, postsList) => {
  if (category === 'Accueil'){
    return postsList
  }
  const filteredPosts =  postsList.filter((post) => post.category === category);
  return filteredPosts;
  
};
setZenMode = () => {
  this.state.zenMode ? this.setState({zenMode:false}) : this.setState({zenMode:true})

};
setLoading = () => {
  this.state.loading ? this.setState({loading:false}) : this.setState({loading:true})
};
  render() {

    return (
    <div className="blog">
      <Header categoriesData={categoriesData} setZenMode={this.setZenMode}/>

      <button type="button" onClick={this.loadData}>Load Data</button>
      {this.state.loading && <Spinner />}
      {!this.state.loading && (
      <Switch>

      {categoriesData.map(({route, label})=> (
      
        <Route
        key={label}
        exact
        path={route}
        >
        <Posts postsData={this.getPostsByCategory(label,this.state.Data)} zenMode={this.state.zenMode} />
        </Route>
      ))}
      <Route><NotFound /></Route>
      </Switch>
      )}
      <Footer />
    </div>
    )
};
};

// == Export
export default Blog;
