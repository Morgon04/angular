import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  notificationList: { name: string; title: string; icon: string; date: string, [key: string]: any }[] = [];
  travelList: { [key: string]: any }[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.initiateNotificationList();
    this.initializeTravelList();
  }

  public initiateNotificationList(): void {
    this.notificationList = [...this.notificationList,
    {
      name: 'Todd Harris',
      title: 'Money Transaction',
      icon: 'attach_money',
      date: '14:12',
      isDone: true
    },
    {
      name: 'Sue Steele',
      title: 'Added Statement',
      icon: 'attach_file',
      date: '10/11/2020',
      isDone: true
    },
    {
      name: 'Jon Gray',
      title: 'Book a Hotel',
      icon: 'hotel',
      date: '10/12/2020'
    },
    {
      name: 'Charles Pearson',
      title: 'Book a car',
      icon: 'hotel',
      date: '20/12/2020'
    },
    {
      name: 'Eva Lawson',
      title: 'Add a new user',
      icon: 'person_add',
      date: '22/12/2020'
    },
    {
      name: 'Jared Lyons',
      title: 'Book a car',
      icon: 'drive_eta',
      date: '27/12/2020'
    },
    {
      name: 'Ian Gregory',
      title: 'Book a Hotel',
      icon: 'hotel',
      date: '31/12/2020'
    },
    {
      name: 'Lousia Stanley',
      title: 'Added attachement',
      icon: 'attach_file',
      date: '01/01/2021'
    }
    ];
  }

  public initializeTravelList(): void {
    this.travelList = [
      ...this.travelList,
      {
        name: 'Stuttgart, Germany',
        date: '10/11/2018',
        mainIcon: 'room',
        type: 'main-header',
        isDone: true
      },
      {
        name: 'Stuttgart Airport',
        date: '10/11/2018',
        mainIcon: 'subtitles',
        type: 'main-header',
        desc: 'Flughafenstrate 32, 70629 Stuttgart, Germany',
        isBorder: true,
        isDone: true,
        listItem: [
          {
            from: 'Sttugart, Germany',
            to: 'Kiev, Ukarine',
            time: '6:30 AM',
            attachment: 'BoardingCard_146118.pdf',
            icon: 'attach_file',
            isHeading: false,
            mainIcon: 'flight_takeoff',
            type: 'noLabel',
            isDone: true
          }
        ]
      },
      {
        name: 'Book bus Ticket',
        date: '10/11/2018',
        mainIcon: 'drive_eta',
        type: 'main-header',
        desc: 'Flughafenstrate 32, 70629 Stuttgart, Germany',
        isBorder: true,
        isDone: false,
        listItem: [
          {
            from: 'Green River',
            to: 'Independence Square Station',
            time: '8:30 AM',
            attachment: 'Bus_ticket.pdf',
            icon: 'attach_file',
            isHeading: false,
            mainIcon: 'flight_takeoff',
            type: 'noLabel',
            isDone: true
          }
        ]
      },
      {
        name: 'Book Auto',
        date: '10/11/2018',
        mainIcon: 'drive_eta',
        type: 'main-header',
        desc: 'Location in city center, kiev, 01001, Ukarine',
        isBorder: true,
        isDone: false,
        listItem: [
          {
            label1: 'From',
            label1Value: '11 okt',
            label2: 'To',
            label2Value: '15 okt',
            label3: 'Duration',
            label3Value: '4 day(s)',
            type: 'label',
            mainIcon: 'query_builder',
            time: '9:30 AM',
          },
          {
            label1: 'Cars model and Number',
            label1Value: 'AB 835247',
            type: 'label',
            mainIcon: 'drive_eta',
          },
          {
            label1: 'Contact Number',
            label1Value: '+38 097 485 01 28',
            type: 'label',
            mainIcon: 'smartphone',
          }
        ]
      },
      {
        name: 'Hotel <<Best Kiev Apartment>>',
        date: '10/11/2018',
        mainIcon: 'hotel',
        type: 'main-header',
        desc: 'Location in city center, kiev, 01001, Ukarine',
        isBorder: true,
        isDone: false,
        listItem: [
          {
            label1: 'Arrival',
            label1Value: '11 okt',
            label2: 'Departure',
            label2Value: '15 okt',
            label3: 'Duration',
            label3Value: '4 day(s)',
            type: 'label',
            mainIcon: 'query_builder',
            time: '9:30 AM',
          },
          {
            label1: 'Booking confirmation number',
            label1Value: '3152784398',
            type: 'label',
            mainIcon: 'lock',
          },
          {
            label1: 'Contact Number',
            label1Value: '+38 097 485 01 28',
            type: 'label',
            mainIcon: 'smartphone',
          }
        ]
      },
      {
        name: 'Book bus Ticket',
        date: '10/11/2018',
        mainIcon: 'drive_eta',
        type: 'main-header',
        desc: 'Flughafenstrate 32, 70629 Stuttgart, Germany',
        isBorder: true,
        isDone: false,
        listItem: [
          {
            from: 'Green River',
            to: 'Independence Square Station',
            time: '8:30 AM',
            attachment: 'Bus_ticket.pdf',
            icon: 'attach_file',
            isHeading: false,
            mainIcon: 'flight_takeoff',
            type: 'noLabel',
            isDone: true
          }
        ]
      },
      {
        name: 'Stuttgart, Germany',
        date: '10/11/2018',
        mainIcon: 'room',
        type: 'main-header',
        isDone: true
      },
    ];
  }

}
