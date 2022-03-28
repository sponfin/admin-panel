import React from "react";
import { Input } from "../../components/Input/Input";

import { Label } from "../../components/Label/Label";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Radio } from "../../components/Radio/Radio";
import { Button } from "../../components/Button/Button";
import { Dropdown } from "../../components/Dropdown/Dropdown";

import { ReactComponent as IconSun } from "../../Icons/sun.svg";
import { ReactComponent as IconMoon } from "../../Icons/moon.svg";

import "./uikit.css";

export const UiKit = () => {
  return (
    <div className="page">
      {/* Input-Date */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Input-date</p>
        <Label
          label="Дата и время заказа"
          className="labelInput"
          htmlFor="Input1"
        />
        <Input id="Input1" className="blockWrapperInputDate" />
        <Label
          label="Дата и время заказа"
          className="labelInput"
          htmlFor="Input2"
        />
        <Input
          id="Input2"
          value="06.12.2021"
          isError
          isNotEmpty={true}
          htmlFor="Input3"
          className="blockWrapperInputDate"
        />
        <Label
          label="Дата и время заказа"
          className="labelInput"
          htmlFor="Input3"
        />
        <Input
          id="Input3"
          value="06.12.2021"
          isLocked
          isDisabled={true}
          className="blockWrapperInputDate"
        />
      </div>

      {/* Searchbar */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">searchbar</p>

        <Input
          view="search"
          placeholder="Номер заказа или ФИО"
          className="blockWrapperSearchbar"
        />
        <Input
          view="search"
          placeholder="Номер заказа или ФИО"
          value="50744"
          isNotEmpty={true}
          className="blockWrapperSearchbar"
        />
      </div>
      {/* Checkbox */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Checkbox</p>
        <div className="checkbox-group">
          <Checkbox
            className="checkboxGroup"
            classCustomCheckboxLoc="customCheckboxloc"
            classlabelLoc="labelLoc"
            id="checkbox1"
            htmlFor="checkbox1"
          />
          <Checkbox
            className="checkboxGroup"
            classCustomCheckboxLoc="customCheckboxloc"
            classlabelLoc="labelLoc"
            id="checkbox2"
            htmlFor="checkbox2"
          />
        </div>
      </div>
      {/* Radio */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Radio</p>
        <div className="radio-group">
          <Radio
            className="radioGroup"
            classCustomRadioLoc="customRadioLoc"
            classlabelLoc="labelLoc"
            type="radio"
            name="radio"
            id="radio1"
            htmlFor="radio1"
            isRadio
          />
          <Radio
            className="radioGroup"
            classCustomRadioLoc="customRadioLoc"
            classlabelLoc="labelLoc"
            type="radio"
            name="radio"
            id="radio2"
            htmlFor="radio2"
            isRadio
            checked
          />
        </div>
      </div>
      {/* Button */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Button</p>
        <div className="button-group">
          <div className="button-group__item">
            <Button
              className="buttonGroup"
              isThemeMain
              isSizeLarge
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className="buttonGroup" isThemeMain isSizeLarge>
              Text here
            </Button>

            <Button
              className="buttonGroup"
              isThemeMain
              isSizeLargeSquare
              icon={IconSun}
            />

            <br />
            <br />

            <Button
              className="buttonGroup"
              isThemeMain
              isSizeSmall
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className="buttonGroup" isThemeMain isSizeSmall>
              Text here
            </Button>

            <Button
              className="buttonGroup"
              isThemeMain
              isSizeSmallSquare
              icon={IconSun}
            />
          </div>

          <div className="button-group__item">
            <Button
              className="buttonGroup"
              isThemeBlue
              isSizeLarge
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className="buttonGroup" isThemeBlue isSizeLarge>
              Text here
            </Button>

            <Button
              className="buttonGroup"
              isThemeBlue
              isSizeLargeSquare
              icon={IconSun}
            />

            <br />
            <br />

            <Button
              className="buttonGroup"
              isThemeBlue
              isSizeSmall
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className="buttonGroup" isThemeBlue isSizeSmall>
              Text here
            </Button>

            <Button
              className="buttonGroup"
              isThemeBlue
              isSizeSmallSquare
              icon={IconSun}
            />
          </div>

          <div className="button-group__item">
            <Button
              className="buttonGroup"
              isThemeBlack
              isSizeLarge
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className="buttonGroup" isThemeBlack isSizeLarge>
              Text here
            </Button>

            <Button
              className="buttonGroup"
              isThemeBlack
              isSizeLargeSquare
              icon={IconSun}
            />
          </div>
        </div>
      </div>
      {/* Dropdown */}
      <div className="block-wrapper page__block-wrapper">
        <p className="block-wrapper__title">Dropdown</p>
        <div className="dropdown-group">
          <div className="dropdown-group__item">
            <Dropdown>
              <Checkbox
                className="checkbox"
                classCustomCheckboxLoc="customCheckboxloc"
                classlabelLoc="labelLoc"
                id="new"
                htmlFor="new"
                label="Новый"
              />
              <Checkbox
                className="checkbox"
                classCustomCheckboxLoc="customCheckboxloc"
                classlabelLoc="labelLoc"
                id="calcilation"
                label="Расчет"
                htmlFor="calcilation"
              />
              <Checkbox
                className="checkbox"
                classCustomCheckboxLoc="customCheckboxloc"
                classlabelLoc="labelLoc"
                id="confirmed"
                htmlFor="confirmed"
                label="Подтвержден"
              />
              <Checkbox
                className="checkbox"
                classCustomCheckboxLoc="customCheckboxloc"
                classlabelLoc="labelLoc"
                id="postponed"
                htmlFor="postponed"
                label="Отложен"
              />
              <Checkbox
                className="checkbox"
                classCustomCheckboxLoc="customCheckboxloc"
                classlabelLoc="labelLoc"
                id="completed"
                htmlFor="completed"
                label="Выполнен"
              />
              <Checkbox
                className="checkbox"
                classCustomCheckboxLoc="customCheckboxloc"
                classlabelLoc="labelLoc"
                id="canceled"
                htmlFor="canceled"
                label="Отменен"
              />
            </Dropdown>

            <Dropdown>
              <Radio
                className="radio"
                classCustomRadioLoc="customRadioLoc"
                type="radio"
                name="radio"
                id="newR"
                ss
                htmlFor="newR"
                label="Новый"
              />
              <Radio
                className="radio"
                classCustomRadioLoc="customRadioLoc"
                type="radio"
                name="radio"
                id="calcilationR"
                label="Расчет"
                htmlFor="calcilationR"
              />
              <Radio
                className="radio"
                classCustomRadioLoc="customRadioLoc"
                type="radio"
                name="radio"
                id="radioConfirmed"
                label="Подтвержден"
                htmlFor="radioConfirmed"
              />
              <Radio
                className="radio"
                classCustomRadioLoc="customRadioLoc"
                type="radio"
                name="radio"
                id="radioPostponed"
                label="Отложен"
                htmlFor="radioPostponed"
              />
              <Radio
                className="radio"
                classCustomRadioLoc="customRadioLoc"
                type="radio"
                name="radio"
                id="radioCompleted"
                label="Выполнен"
                htmlFor="radioCompleted"
              />
              <Radio
                className="radio"
                classCustomRadioLoc="customRadioLoc"
                type="radio"
                name="radio"
                id="radioCanceled"
                label="Отменен"
                htmlFor="radioCanceled"
              />
            </Dropdown>
          </div>
          <div className="dropdown-group__item">
            <Dropdown>
              <Label
                label="Номер страницы"
                className="labelInput"
                htmlFor="Input1"
              />
              <Input
                id="Input1"
                className="blockWrapperInputDate"
                placeholder="Введите номер"
              />
            </Dropdown>
            <Dropdown>
              <Label label="Удалить n записей?" className="dropdownLabel" />
              <Button className="dropdownButton" isThemeBlue isSizeSmall>
                Удалить
              </Button>
              <Button isThemeMain isSizeSmall>
                Отмена
              </Button>
            </Dropdown>
            <Dropdown>
              <Label label="Выберите тему" className="dropdownLabel" />
              <Button
                className="dropdownButton"
                isThemeBlue
                isSizeSmall
                icon={IconSun}
              >
                Светлая
              </Button>
              <Button isThemeMain isSizeSmall icon={IconMoon}>
                Темная
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
