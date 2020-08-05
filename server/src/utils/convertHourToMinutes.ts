export default function convertHourToMinutes(time: string){
    const [hour,minutues] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutues;
    return timeInMinutes;
}