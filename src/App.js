import "./css/button.css";
import "./css/checkbox-radio.css";
import "./css/common.css";
import "./css/dropdown.css";
import "./css/input.css";
import "./css/reset.css";
import "./css/search-bar.css";
import sprite from "./sprite.svg";

function App() {
  return (
    <div class="page">
      {/* Input-Date */}
      <div class="block-wrapper page__block-wrapper">
        <p class="block-wrapper__title">Input-date</p>

        <div class="input-date block-wrapper__input-date">
          <label class="label-input input-date__label-input" for="inputDate">
            Дата и время заказа
          </label>

          <div class="input-date__wrapper">
            <input
              id="inputDate"
              class="input-date__input"
              placeholder="Введите"
            />
          </div>
        </div>

        <div class="input-date block-wrapper__input-date">
          <label
            class="label-input input-date__label-input"
            for="inputDateError"
          >
            Дата и время заказа
          </label>

          <div class="input-date__wrapper">
            <input
              id="inputDateError"
              class="input-date__input input-date__input_error"
              placeholder="Введите"
              value="06.12.2021"
              type="datetime"
            />

            <button class="input-date__btn-clear">
              <svg class="input-date__icon-x">
                <use xlinkHref={`${sprite}#x-large`}></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="input-date block-wrapper__input-date">
          <label
            class="label-input input-date__label-input"
            for="inputDateLocked"
          >
            Дата и время заказа
          </label>

          <div class="input-date__wrapper">
            <input
              id="inputDateLocked"
              class="input-date__input input-date__input_locked"
              value="06.12.2021"
              placeholder="Введите"
              type="datetime"
              disabled
            />
            <svg class="input-date__icon-locked">
              <use xlinkHref={`${sprite}#locked`}></use>
            </svg>
          </div>
        </div>
      </div>
      {/* Searchbar */}
      <div class="block-wrapper page__block-wrapper">
        <p class="block-wrapper__title">searchbar</p>

        <div class="searchbar block-wrapper__searchbar">
          <div class="searchbar__wrapper">
            <svg class="searchbar__icon-search">
              <use xlinkHref={`${sprite}#search`}></use>
            </svg>

            <input
              class="searchbar__input"
              placeholder="Номер заказа или ФИО"
            />
          </div>
        </div>

        <div class="searchbar">
          <div class="searchbar__wrapper">
            <svg class="searchbar__icon-search">
              <use xlinkHref={`${sprite}#search`}></use>
            </svg>

            <input
              class="searchbar__input"
              placeholder="Номер заказа или ФИО"
              value="50744"
            />
            <button class="searchbar__btn-clear">
              <svg class="searchbar__icon-x">
                <use xlinkHref={`${sprite}#x-large`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Checkbox */}
      <div class="block-wrapper page__block-wrapper">
        <p class="block-wrapper__title">Checkbox</p>
        <div class="checkbox-group">
          <div class="checkbox checkbox-group__checkbox">
            <input type="checkbox" class="checkbox__input" id="checkbox1" />
            <span class="checkbox__custom-checkbox">
              <svg class="checkbox__icon">
                <use xlinkHref={`${sprite}#checkmark`}></use>
              </svg>
            </span>

            <label class="checkbox__label" for="checkbox1"></label>
          </div>

          <div class="checkbox">
            <input type="checkbox" class="checkbox__input" id="checkbox2" />
            <span class="checkbox__custom-checkbox">
              <svg class="checkbox__icon">
                <use xlinkHref={`${sprite}#checkmark`}></use>
              </svg>
            </span>

            <label class="checkbox__label" for="checkbox2"></label>
          </div>
        </div>
      </div>
      {/* Radio */}
      <div class="block-wrapper page__block-wrapper">
        <p class="block-wrapper__title">Radio</p>
        <div class="radio-group">
          <div class="radio radio-group__radio">
            <input type="radio" name="radio" class="radio__input" id="radio1" />
            <span class="radio__custom-radio"></span>
            <label class="radio__label" for="radio1"></label>
          </div>
          <div class="radio">
            <input
              type="radio"
              name="radio"
              class="radio__input"
              id="radio2"
              checked
            />
            <span class="radio__custom-radio"></span>
            <label class="radio__label" for="radio2"></label>
          </div>
        </div>
      </div>
      {/* Button */}
      <div class="block-wrapper page__block-wrapper">
        <p class="block-wrapper__title">Button</p>
        <div class="button-group">
          <div class="button-group__item">
            <button class="button button_theme_main button_size_large button-group__button">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span class="button__text">Text here</span>
            </button>

            <button class="button button_theme_main button_size_large button-group__button">
              <span class="button__text">Text here</span>
            </button>

            <button class="button button_theme_main button_size_large-square button-group__button">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
            </button>

            <br />
            <br />

            <button class="button button_theme_main button_size_small button-group__button">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span class="button__text">Text here</span>
            </button>

            <button class="button button_theme_main button_size_small button-group__button">
              <span class="button__text">Text here</span>
            </button>

            <button class="button button_theme_main button_size_small-square">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
            </button>
          </div>

          <div class="button-group__item">
            <button class="button button_theme_blue button_size_large button-group__button">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span class="button__text">Text here</span>
            </button>

            <button class="button button_theme_blue button_size_large button-group__button">
              <span class="button__text">Text here</span>
            </button>

            <button class="button button_theme_blue button_size_large-square button-group__button">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
            </button>
            <br />
            <br />
            <button class="button button_theme_blue button_size_small button-group__button">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span class="button__text">Text here</span>
            </button>
            <button class="button button_theme_blue button_size_small button-group__button">
              <span class="button__text">Text here</span>
            </button>
            <button class="button button_theme_blue button_size_small-square">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
            </button>
          </div>

          <div class="button-group__item">
            <button class="button button_theme_black button_size_large button-group__button">
              <svg class="icon">
                <use xlinkHref={`${sprite}#sun`}></use>
              </svg>
              <span class="button__text">Text here</span>
            </button>

            <button class="button button_theme_black button_size_large">
              <span class="button__text">Text here</span>
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown */}
      <div class="block-wrapper page__block-wrapper">
        <p class="block-wrapper__title">Dropdown</p>
        <div class="dropdown-group">
          <div class="dropdown-group__item">
            <div class="dropdown dropdown-group__dropdown">
              <div class="checkbox dropdown__checkbox">
                <input type="checkbox" class="checkbox__input" id="new" />
                <span class="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg class="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label
                  class="checkbox__label checkbox__label_position"
                  for="new"
                >
                  Новый
                </label>
              </div>

              <div class="checkbox dropdown__checkbox">
                <input
                  type="checkbox"
                  class="checkbox__input"
                  id="calcilation"
                />
                <span class="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg class="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label class="checkbox__label" for="calcilation">
                  Расчет
                </label>
              </div>

              <div class="checkbox dropdown__checkbox">
                <input type="checkbox" class="checkbox__input" id="confirmed" />
                <span class="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg class="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label class="checkbox__label" for="confirmed">
                  Подтвержден
                </label>
              </div>

              <div class="checkbox dropdown__checkbox">
                <input type="checkbox" class="checkbox__input" id="postponed" />
                <span class="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg class="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label class="checkbox__label" for="postponed">
                  Отложен
                </label>
              </div>

              <div class="checkbox dropdown__checkbox">
                <input type="checkbox" class="checkbox__input" id="completed" />
                <span class="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg class="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label class="checkbox__label" for="completed">
                  Выполнен
                </label>
              </div>

              <div class="checkbox dropdown__checkbox">
                <input type="checkbox" class="checkbox__input" id="canceled" />
                <span class="checkbox__custom-checkbox checkbox__custom-checkbox_loc">
                  <svg class="checkbox__icon">
                    <use xlinkHref={`${sprite}#checkmark`}></use>
                  </svg>
                </span>
                <label class="checkbox__label" for="canceled">
                  Отменен
                </label>
              </div>
            </div>

            <div class="dropdown dropdown-group__dropdown">
              <div class="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  class="radio__input"
                  id="radioNew"
                />

                <label class="radio__label" for="radioNew">
                  Новый
                </label>
              </div>

              <div class="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  class="radio__input"
                  id="radioCalcilation"
                />
                <label class="radio__label" for="radioCalcilation">
                  Расчет
                </label>
              </div>

              <div class="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  class="radio__input"
                  id="radioConfirmed"
                />
                <label class="radio__label" for="radioConfirmed">
                  Подтвержден
                </label>
              </div>

              <div class="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  class="radio__input"
                  id="radioPostponed"
                />
                <label class="radio__label" for="radioPostponed">
                  Отложен
                </label>
              </div>

              <div class="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  class="radio__input"
                  id="radioCompleted"
                />
                <label class="radio__label" for="radioCompleted">
                  Выполнен
                </label>
              </div>

              <div class="radio dropdown__radio">
                <input
                  type="radio"
                  name="radio_drop"
                  class="radio__input"
                  id="radioCanceled"
                />
                <label class="radio__label" for="radioCanceled">
                  Отменен
                </label>
              </div>
            </div>
          </div>
          <div class="dropdown-group__item">
            <div class="dropdown dropdown-group__dropdown">
              <div class="input-date">
                <label
                  class="label-input input-date__label-input"
                  for="inputDate"
                >
                  Номер страницы
                </label>

                <div class="input-date__wrapper">
                  <input
                    id="inputDate"
                    class="input-date__input"
                    placeholder="Введите номер"
                  />
                </div>
              </div>
            </div>

            <div class="dropdown dropdown-group__dropdown">
              <span class="dropdown__label">Удалить n записей?</span>
              <button class="button button_full-width button_theme_blue button_size_small">
                <span class="button__text">Удалить</span>
              </button>
              <button class="button button_full-width button_theme_main button_size_small">
                <span class="button__text">Отмена</span>
              </button>
            </div>

            <div class="dropdown dropdown-group__dropdown">
              <span class="dropdown__label">Выберите тему</span>
              <button class="button button_full-width button_theme_blue button_size_small">
                <svg class="icon">
                  <use xlinkHref={`${sprite}#sun`}></use>
                </svg>
                <span class="button__text">Светлая</span>
              </button>
              <button class="button button_full-width button_theme_main button_size_small">
                <svg class="icon">
                  <use xlinkHref={`${sprite}#moon`}></use>
                </svg>
                <span class="button__text">Темная</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
