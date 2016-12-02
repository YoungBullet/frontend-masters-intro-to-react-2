import React from 'react'
import { Provider } from 'react-redux'
import { shallow, render } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import store from '../store'
import { setSearchTerm } from '../actionCreators'
import Search, { Unwrapped as UnwrappedSearch } from '../Search'
import ShowCard from '../ShowCard'
import reducers from '../reducers';
import preload from '../../public/data.json'

test('Search snapshot test', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>) // pass in what redux would have passed in
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render ShowCard for each show', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct number of shows based on search', () => {
  const searchTerm = 'house'
  store.dispatch(setSearchTerm(searchTerm))
  const component = render(<Provider store={store}><Search shows={preload.shows} /></Provider>)
  const showCount = preload.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0).length
  expect(component.find('.show-card').length).toEqual(showCount)
})


test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({searchTerm:'',omdbData:{}});
});

test('reducers SET_SEARCH_TERM', () => {
  let state;
  state = reducers({searchTerm:'house',omdbData:{}}, {type:'SET_SEARCH_TERM',searchTerm:'house'});
  expect(state).toEqual({searchTerm:'house',omdbData:{}});
});

test('reducers', () => {
  let state;
  state = reducers({searchTerm:'house',omdbData:{}}, {type:'SET_OMDB_DATA',imdbID:'tt1856010',omdbData:{Title:'House of Cards',Year:'2013–',Rated:'TV-MA',Released:'01 Feb 2013',Runtime:'51 min',Genre:'Drama',Director:'N/A',Writer:'Beau Willimon',Actors:'Kevin Spacey, Robin Wright, Michael Kelly, Nathan Darrow',Plot:'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',Language:'English',Country:'USA',Awards:'Won 2 Golden Globes. Another 25 wins & 162 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'9.0',imdbVotes:'326,913',imdbID:'tt1856010',Type:'series',totalSeasons:'5',Response:'True'}});
  expect(state).toEqual({searchTerm:'house',omdbData:{tt1856010:{Title:'House of Cards',Year:'2013–',Rated:'TV-MA',Released:'01 Feb 2013',Runtime:'51 min',Genre:'Drama',Director:'N/A',Writer:'Beau Willimon',Actors:'Kevin Spacey, Robin Wright, Michael Kelly, Nathan Darrow',Plot:'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',Language:'English',Country:'USA',Awards:'Won 2 Golden Globes. Another 25 wins & 162 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'9.0',imdbVotes:'326,913',imdbID:'tt1856010',Type:'series',totalSeasons:'5',Response:'True'}}});
});
