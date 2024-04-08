import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux'; // Импорт Provider из react-redux
import store from '../store/index'; // Импорт Redux store
import AdvertismentContainer from './advertismentContainer';

describe('AdvertismentContainer', () => {
  test('renders AdvertismentContainer correctly', () => {
    render(
      <Provider store={store}>
        <AdvertismentContainer />
      </Provider>
    );

    // Проверяем, что компонент отображает заголовок "Добавить расходы"
    expect(screen.getByText('Добавить объявление')).toBeInTheDocument();

    // Проверяем, что компонент отображает заголовок "Список расходов"
    expect(screen.getByText('Объявления')).toBeInTheDocument();
  });
});
