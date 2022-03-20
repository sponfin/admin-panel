// import './css/button.css';
// import './css/checkbox-radio.css';
import './css/reset.css';
import './css/common.css';
import './css/dropdown.css';
// import "./css/input.css";
import './css/reset.css';
import './css/search-bar.css';
import sprite from './sprite.svg';
import { Input } from './components/Input/Input';

import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';

const App = () => {
  return (
    <div className="page">
      {/* Input-Date */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Input-date</p>
        <Input />
        <Input isError />
        <Input isLocked />
        {/* <Input2 />
        <Input3 /> */}
      </div>
      {/* Searchbar */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">searchbar</p>

        <div className="searchbar block-wrapper__searchbar">
          <div className="searchbar__wrapper">
            <svg className="searchbar__icon-search">
              <use xlinkHref={`${sprite}#search`}></use>
            </svg>

            <input
              className="searchbar__input"
              placeholder="Номер заказа или ФИО"
            />
          </div>
        </div>

        <div className="searchbar">
          <div className="searchbar__wrapper">
            <svg className="searchbar__icon-search">
              <use xlinkHref={`${sprite}#search`}></use>
            </svg>

            <input
              className="searchbar__input"
              placeholder="Номер заказа или ФИО"
              value="50744"
            />
            <button className="searchbar__btn-clear">
              <svg className="searchbar__icon-x">
                <use xlinkHref={`${sprite}#x-large`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Checkbox */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Checkbox</p>
        <div className="checkbox-group">
          <Checkbox />
          {/* <div className="checkbox checkbox-group__checkbox">
            <input type="checkbox" className="checkbox__input" id="checkbox1" />
            <span className="checkbox__custom-checkbox">
              <svg className="checkbox__icon">
                <use xlinkHref={`${sprite}#checkmark`}></use>
              </svg>
            </span>

            <label className="checkbox__label" htmlFor="checkbox1"></label>
          </div> */}

          <div className="checkbox">
            <input type="checkbox" className="checkbox__input" id="checkbox2" />
            <span className="checkbox__custom-checkbox">
              <svg className="checkbox__icon">
                <use xlinkHref={`${sprite}#checkmark`}></use>
              </svg>
            </span>

            <label className="checkbox__label" htmlFor="checkbox2"></label>
          </div>
        </div>
      </div>
      {/* Radio */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Radio</p>
        <div className="radio-group">
          <div className="radio radio-group__radio">
            <input
              type="radio"
              name="radio"
              className="radio__input"
              id="radio1"
            />
            <span className="radio__custom-radio"></span>
            <label className="radio__label" htmlFor="radio1"></label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="radio"
              className="radio__input"
              id="radio2"
              checked
            />
            <span className="radio__custom-radio"></span>
            <label className="radio__label" htmlFor="radio2"></label>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Button</p>
        <div className="button-group">
          <div className="button-group__item">
            <Button />
            {/* <button className="button button_theme_main button_size_large button-group__button">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span className="button__text">Text here</span>
            </button> */}

            <button className="button button_theme_main button_size_large button-group__button">
              <span className="button__text">Text here</span>
            </button>

            <button className="button button_theme_main button_size_large-square button-group__button">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
            </button>

            <br />
            <br />

            <button className="button button_theme_main button_size_small button-group__button">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span className="button__text">Text here</span>
            </button>

            <button className="button button_theme_main button_size_small button-group__button">
              <span className="button__text">Text here</span>
            </button>

            <button className="button button_theme_main button_size_small-square">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
            </button>
          </div>

          <div className="button-group__item">
            <button className="button button_theme_blue button_size_large button-group__button">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span className="button__text">Text here</span>
            </button>

            <button className="button button_theme_blue button_size_large button-group__button">
              <span className="button__text">Text here</span>
            </button>

            <button className="button button_theme_blue button_size_large-square button-group__button">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
            </button>
            <br />
            <br />
            <button className="button button_theme_blue button_size_small button-group__button">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_theme_blue button_size_small button-group__button">
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_theme_blue button_size_small-square">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
            </button>
          </div>

          <div className="button-group__item">
            <button className="button button_theme_black button_size_large button-group__button">
              <svg className="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span className="button__text">Text here</span>
            </button>

            <button className="button button_theme_black button_size_large">
              <span className="button__text">Text here</span>
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Dropdown</p>
        <div className="dropdown-group">
          <div className="dropdown-group__item">
            <div className="dropdown dropdown-group__dropdown">
              <div className="checkbox dropdown__checkbox">
                <input type="checkbox" className="checkbox__input" id="new" />
                <span className="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg className="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label
                  className="checkbox__label checkbox__label_position"
                  htmlFor="new"
                >
                  Новый
                </label>
              </div>

              <div className="checkbox dropdown__checkbox">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  id="calcilation"
                />
                <span className="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg className="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label className="checkbox__label" htmlFor="calcilation">
                  Расчет
                </label>
              </div>

              <div className="checkbox dropdown__checkbox">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  id="confirmed"
                />
                <span className="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg className="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label className="checkbox__label" htmlFor="confirmed">
                  Подтвержден
                </label>
              </div>

              <div className="checkbox dropdown__checkbox">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  id="postponed"
                />
                <span className="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg className="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label className="checkbox__label" htmlFor="postponed">
                  Отложен
                </label>
              </div>

              <div className="checkbox dropdown__checkbox">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  id="completed"
                />
                <span className="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg className="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label className="checkbox__label" htmlFor="completed">
                  Выполнен
                </label>
              </div>

              <div className="checkbox dropdown__checkbox">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  id="canceled"
                />
                <span className="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg className="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label className="checkbox__label" htmlFor="canceled">
                  Отменен
                </label>
              </div>
            </div>

            <div className="dropdown dropdown-group__dropdown">
              <div className="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  className="radio__input"
                  id="radioNew"
                />

                <label className="radio__label" htmlFor="radioNew">
                  Новый
                </label>
              </div>

              <div className="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  className="radio__input"
                  id="radioCalcilation"
                />
                <label className="radio__label" htmlFor="radioCalcilation">
                  Расчет
                </label>
              </div>

              <div className="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  className="radio__input"
                  id="radioConfirmed"
                />
                <label className="radio__label" htmlFor="radioConfirmed">
                  Подтвержден
                </label>
              </div>

              <div className="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  className="radio__input"
                  id="radioPostponed"
                />
                <label className="radio__label" htmlFor="radioPostponed">
                  Отложен
                </label>
              </div>

              <div className="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  className="radio__input"
                  id="radioCompleted"
                />
                <label className="radio__label" htmlFor="radioCompleted">
                  Выполнен
                </label>
              </div>

              <div className="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  className="radio__input"
                  id="radioCanceled"
                />
                <label className="radio__label" htmlFor="radioCanceled">
                  Отменен
                </label>
              </div>
            </div>
          </div>
          <div className="dropdown-group__item">
            <div className="dropdown dropdown-group__dropdown">
              <div className="input-date">
                <label
                  className="label-input input-date__label-input"
                  htmlFor="inputDate"
                >
                  Номер страницы
                </label>

                <div className="input-date__wrapper">
                  <input
                    id="inputDate"
                    className="input-date__input"
                    placeholder="Введите номер"
                  />
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-group__dropdown">
              <span className="dropdown__label">Удалить n записей?</span>
              <button className="button button_full-width button_theme_blue button_size_small">
                <span className="button__text">Удалить</span>
              </button>
              <button className="button button_full-width button_theme_main button_size_small">
                <span className="button__text">Отмена</span>
              </button>
            </div>

            <div className="dropdown dropdown-group__dropdown">
              <span className="dropdown__label">Выберите тему</span>
              <button className="button button_full-width button_theme_blue button_size_small">
                <svg className="icon">
                  <use xlinkHref={`${sprite}#sun`}></use>
                </svg>
                <span className="button__text">Светлая</span>
              </button>
              <button className="button button_full-width button_theme_main button_size_small">
                <svg className="icon">
                  <use xlinkHref={`${sprite}#moon`}></use>
                </svg>
                <span className="button__text">Темная</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
