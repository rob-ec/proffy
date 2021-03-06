import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              {value: "Artes", label: "Artes"},
              {value: "Biologia", label: "Biologia"},
              {value: "Matemática", label: "Matemática"},
              {value: "Português", label: "Português"},
              {value: "História", label: "História"},
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              {value: '0', label: "Domingo"},
              {value: '1', label: "Segunda-feira"},
              {value: '2', label: "Terça-feira"},
              {value: '3', label: "Quarta-feira"},
              {value: '4', label: "Quinta-feira"},
              {value: '5', label: "Sextaj-feira"},
              {value: '6', label: "Sábado-feira"},
            ]}
          />
          <Input name="time" type="time" label="Horário" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;
