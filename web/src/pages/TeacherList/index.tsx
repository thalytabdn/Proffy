import React, { useState, FormEvent } from "react";
import "./styles.css";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader/";
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";


export default function TeacherList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers,setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent){
    e.preventDefault();

    const response = await api.get('classes',{
      params:{
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Esses são os Proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>

        <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'História', label: 'História'},
              { value: 'Química', label: 'Química'},
              { value: 'Inglês', label: 'Inglês'},
              { value: 'Espanhol', label: 'Inglês'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'Geometria', label: 'Geometria'},
              { value: 'Sociologia', label: 'Sociologia'},
              { value: 'Redação', label: 'Redação'},
              { value: 'Filosofia', label: 'Filosofia'},
              { value: 'Português', label: 'Português'},
              { value: 'Física', label: 'Física'},
            ]}
          />
          
          <Select 
            name="week_day" 
            label="Dia da Semana"
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda-feira'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'Quarta-feira'},
              { value: '4', label: 'Quinta-feira'},
              { value: '5', label: 'Sexta-feira'},
              { value: '6', label: 'Sábado'},
            ]}
          />

         <Input 
          type="time" 
          name="time" 
          label="Hora" 
          value={time}
          onChange={(e) => { setTime(e.target.value) }}
        />

        <button type="submit">
          Buscar
        </button>

        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  );
}
