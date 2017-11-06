import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
 } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { BlogComponent } from './blog.component';
import { NameListService } from '../shared/name-list/name-list.service';

export function main() {
  describe('Blog component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [BlogComponent],
        providers: [
          { provide: NameListService, useValue: new MockNameListService() }
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BlogComponent);
            let blogInstance = fixture.debugElement.componentInstance;
            let blogDOMEl = fixture.debugElement.nativeElement;
            let mockNameListService =
              fixture.debugElement.injector.get<any>(NameListService) as MockNameListService;
            let nameListServiceSpy = spyOn(mockNameListService, 'get').and.callThrough();

            mockNameListService.returnValue = ['1', '2', '3'];

            fixture.detectChanges();

            expect(blogInstance.nameListService).toEqual(jasmine.any(MockNameListService));
            expect(blogDOMEl.querySelectorAll('li').length).toEqual(3);
            expect(nameListServiceSpy.calls.count()).toBe(1);

            blogInstance.newName = 'Minko';
            blogInstance.addName();

            fixture.detectChanges();

            expect(blogDOMEl.querySelectorAll('li').length).toEqual(4);
            expect(blogDOMEl.querySelectorAll('li')[3].textContent).toEqual('Minko');
          });

      }));
  });
}

class MockNameListService {

  returnValue: string[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
