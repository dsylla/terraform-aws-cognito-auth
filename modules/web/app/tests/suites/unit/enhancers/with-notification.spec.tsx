/*
 * Copyright (c) 2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { shallow } from "enzyme"
import { prop } from "ramda"
import * as React from "react"

import {
  withNotification,
  WithNotification
} from "enhancers"
import { NotificationType } from "providers/store/notification"

import { Placeholder } from "_/helpers"
import { mockStore } from "_/mocks/providers"

/* ----------------------------------------------------------------------------
 * Tests
 * ------------------------------------------------------------------------- */

/* Notification enhancer */
describe("enhancers/with-notification", () => {

  /* Initialize store */
  const store = mockStore({
    notification: { show: false }
  })

  /* Clear store */
  beforeEach(() => {
    store.clearActions()
  })

  /* withNotification */
  describe("withNotification", () => {

    /* Apply enhancer to placeholder component */
    const Component = withNotification()(Placeholder)
    const component = shallow<WithNotification>(<Component />, {
      context: { store }
    })

    /* { notification } */
    describe("{ notification }", () => {

      /* Notification */
      const notification = component.prop("notification")

      /* Test: should map state to props */
      it("should map state to props", () => {
        expect(prop("notification", store.getState())).toBe(notification)
      })
    })

    /* { displayNotification } */
    describe("{ displayNotification }", () => {

      /* Display notification dispatcher */
      const displayNotification = component.prop("displayNotification")

      /* Test: should map dispatch to props */
      it("should map dispatch to props", () => {
        expect(displayNotification).toEqual(jasmine.any(Function))
      })

      /* Test: should dispatch action */
      it("should dispatch action", () => {
        displayNotification({
          type: NotificationType.SUCCESS,
          message: "<message>"
        })
        expect(store.getActions()).toMatchSnapshot()
        expect(store.getActions().length).toEqual(1)
      })
    })

    /* { dismissNotification } */
    describe("{ dismissNotification }", () => {

      /* Dismiss notification dispatcher */
      const dismissNotification = component.prop("dismissNotification")

      /* Test: should map dispatch to props */
      it("should map dispatch to props", () => {
        expect(dismissNotification).toEqual(jasmine.any(Function))
      })

      /* Test: should dispatch action */
      it("should dispatch action", () => {
        dismissNotification()
        expect(store.getActions()).toMatchSnapshot()
        expect(store.getActions().length).toEqual(1)
      })
    })
  })
})