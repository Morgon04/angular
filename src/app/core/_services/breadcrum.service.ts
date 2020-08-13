import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumService {


  public breadcrums: any[] = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      children: [
        {
          name: 'Javascript', url: '/javascript',
          children: [
            {
              name: 'Basics', url: '/javascript/basics',
            },
            {
              name: 'Functions', url: '/javascript/functions',
            }
          ]
        },
        {
          name: 'Angular', url: '/angular',
          children: [
            // {
            //   name: 'Basics', url: '/javascript/basics',
            // }
          ]
        },
        {
          name: 'To-do', url: '/to-do',
          children: [
            {
              name: 'Create', url: '/to-do/create',
            }
          ],
        },
        {
          name: 'Responsive Design', url: '/responsive',
          children: [
            {
              name: 'Candidates',
              url: '/responsive/candidates',
            },
            {
              name: 'Developers',
              url: '/responsive/developers',
            }
          ],
        }


      ]
    }
  ];

  public containArray = [
    '/responsive/list',
    '/javascript/topics',
    '/angular/topics',
    '/to-do/list'
  ];
  constructor() { }

  public getBreadCrums(url: any): any[] {

    if (url.split('#').length > 0) {
      url = url.split('#')[0].toString();
    }
    const spiltedUrl: any[] = url.split('/');
    // tslint:disable-next-line: one-variable-per-declaration
    let parent: any, child: any, grandChild: any;
    parent = this.breadcrums[0];
    child = this.findBreadCrumChild(parent.children, url);
    if (url && spiltedUrl && spiltedUrl.length === 2) {
      return [{ name: parent.name, url: parent.url }, { name: child.name, url: child.url }];
    } else if (url && spiltedUrl && spiltedUrl.length === 3) {
      child = this.findBreadCrumChild(parent.children, `/${spiltedUrl[1]}`);
      if (this.containArray.includes(url)) {
        return [{ name: parent.name, url: parent.url }, { name: child.name, url: child.url }];
      }
      grandChild = this.findBreadCrumChild(child.children, url);
      return [{ name: parent.name, url: parent.url }, { name: child.name, url: child.url }, { name: grandChild.name, url: grandChild.url }];
    }
    return [];
  }

  public findBreadCrumChild(children: any[], url: string): any {
    return children.find((c: any) => c.url === url);
  }



}
