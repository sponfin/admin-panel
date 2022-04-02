import React, { useState } from "react";
import cn from "classnames";

import {
  Input,
  Label,
  Checkbox,
  Radio,
  Button,
  Dropdown,
  ControlLabel,
} from "components";

import { ReactComponent as IconSun } from "icons/sun.svg";
import { ReactComponent as IconMoon } from "icons/moon.svg";
import { ReactComponent as IconSearch } from "icons/search.svg";

import { ReactComponent as IconXLarge } from "icons/x-large.svg";
import { ReactComponent as IconLocked } from "icons/locked.svg";

import styles from "./UiKit.module.css";

export const UiKit = () => {
  const classBlockWrapper = cn(styles.blockWrapper, styles.pageBlockWrapper);

  return (
    <div className={styles.page}>
      {/* Input-Date */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Input-date</p>
        <Label
          label="Дата и время заказа"
          className={styles.labelInput}
          htmlFor="Input1"
        />
        <Input id="Input1" className={styles.blockWrapperInputDate} />
        <Label
          label="Дата и время заказа"
          className={styles.labelInput}
          htmlFor="Input2"
        />
        <Input
          id="Input2"
          defaultValue="06.12.2021"
          isError
          htmlFor="Input3"
          className={styles.blockWrapperInputDate}
          iconClear={IconXLarge}
          iconLocked={IconLocked}
        />
        <Label
          label="Дата и время заказа"
          className={styles.labelInput}
          htmlFor="Input3"
        />
        <Input
          id="Input3"
          defaultValue="06.12.2021"
          isDisabled={true}
          className={styles.blockWrapperInputDate}
          iconClear={IconXLarge}
          iconLocked={IconLocked}
        />
      </div>

      {/* Searchbar */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>searchbar</p>

        <Input
          leftIcon={IconSearch}
          placeholder="Номер заказа или ФИО"
          className={styles.blockWrapperSearchbar}
          iconClear={IconXLarge}
        />
        <Input
          leftIcon={IconSearch}
          placeholder="Номер заказа или ФИО"
          defaultValue="50744"
          className={styles.blockWrapperSearchbar}
          iconClear={IconXLarge}
        />
      </div>
      {/* Checkbox */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Checkbox</p>
        <div className={styles.checkboxWrapper}>
          <Checkbox className={styles.checkboxGroup} />
          <Checkbox className={styles.checkboxGroup} />
        </div>
      </div>
      {/* Radio */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Radio</p>
        <div className={styles.radioWrapper}>
          <Radio className={styles.radioGroup} name="radio" />
          <Radio className={styles.radioGroup} name="radio" checked />
        </div>
      </div>
      {/* Button */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Button</p>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttonWrapperItem}>
            <Button
              className={styles.buttonGroup}
              theme="main"
              size="large"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="main" size="large">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="main"
              size="large"
              icon={IconSun}
            />

            <br />
            <br />

            <Button
              className={styles.buttonGroup}
              theme="main"
              size="small"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="main" size="small">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="main"
              size="small"
              icon={IconSun}
            />
          </div>

          <div className={styles.buttonWrapperItem}>
            <Button
              className={styles.buttonGroup}
              theme="blue"
              size="large"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="blue" size="large">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="blue"
              size="large"
              icon={IconSun}
            />

            <br />
            <br />

            <Button
              className={styles.buttonGroup}
              theme="blue"
              size="small"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="blue" size="small">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="blue"
              size="small"
              icon={IconSun}
            />
          </div>

          <div className={styles.buttonWrapperItem}>
            <Button
              className={styles.buttonGroup}
              theme="black"
              size="large"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="black" size="large">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="black"
              size="large"
              icon={IconSun}
            />
          </div>
        </div>
      </div>
      {/* Dropdown */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Dropdown</p>
        <div className={styles.dropdownGoup}>
          <div className={styles.dropdownGoupItem}>
            <Dropdown>
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Checkbox />}
                label="Новый"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Checkbox />}
                label="Расчет"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Checkbox />}
                label="Подтвержден"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Checkbox />}
                label="Отложен"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Checkbox />}
                label="Выполнен"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Checkbox />}
                label="Отменен"
              />
            </Dropdown>

            <Dropdown>
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Radio name="dropdown" isNoRadio />}
                label="Новый"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Radio name="dropdown" isNoRadio />}
                label="Расчет"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Radio name="dropdown" isNoRadio />}
                label="Подтвержден"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Radio name="dropdown" isNoRadio />}
                label="Отложен"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Radio name="dropdown" isNoRadio />}
                label="Выполнен"
              />
              <ControlLabel
                classControllLabel={styles.dropdownControllLabel}
                classControl={styles.dropdownControl}
                control={<Radio name="dropdown" isNoRadio />}
                label="Отменен"
              />
            </Dropdown>
          </div>
          <div className={styles.dropdownGoupItem}>
            <Dropdown>
              <Label
                label="Номер страницы"
                className={styles.labelInput}
                htmlFor="theme"
              />
              <Input
                id="theme"
                className={styles.blockWrapperInputDate}
                placeholder="Введите номер"
              />
            </Dropdown>
            <Dropdown>
              <Label
                label="Удалить n записей?"
                className={styles.dropdownLabel}
              />
              <Button
                className={styles.dropdownButton}
                theme="blue"
                size="small"
              >
                Удалить
              </Button>
              <Button theme="main" size="small">
                Отмена
              </Button>
            </Dropdown>
            <Dropdown>
              <Label label="Выберите тему" className={styles.dropdownLabel} />
              <Button
                className={styles.dropdownButton}
                theme="blue"
                size="small"
                icon={IconSun}
              >
                Светлая
              </Button>
              <Button theme="main" size="small" icon={IconMoon}>
                Темная
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
