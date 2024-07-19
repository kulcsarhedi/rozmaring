import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 

const BookingPage = () => {
  return (
    <div className="content">
      <div className="container text-left">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h2 className="mb-5 text-center">Book your stay with us here!</h2>
            <div className="d-flex">
              <input type="text" className="form-control m-2 mb-3" id="result_from" placeholder="Check in" disabled />
              <input type="text" className="form-control m-2 mb-3" id="result_to" placeholder="Check out" disabled />
            </div>
            <form action="#" className="row">
              <div className="col-lg-6 mb-4">
                <div id="inline_cal_from" data-rome-id="0">
                  <div className="rd-container" style={{ display: 'inline-block' }}>
                    <div className="rd-date">
                      <div className="rd-month">
                        <button className="rd-back" type="button"></button>
                        <button className="rd-next" type="button"></button>
                        <div className="rd-month-label">June 2024</div>
                        <table className="rd-days">
                          <thead className="rd-days-head">
                            <tr className="rd-days-row">
                              <th className="rd-day-head">Su</th>
                              <th className="rd-day-head">Mo</th>
                              <th className="rd-day-head">Tu</th>
                              <th className="rd-day-head">We</th>
                              <th className="rd-day-head">Th</th>
                              <th className="rd-day-head">Fr</th>
                              <th className="rd-day-head">Sa</th>
                            </tr>
                          </thead>
                          <tbody className="rd-days-body" data-rome-offset="0">
                            <tr className="rd-days-row">
                              <td className="rd-day-body rd-day-prev-month">26</td>
                              <td className="rd-day-body rd-day-prev-month">27</td>
                              <td className="rd-day-body rd-day-prev-month">28</td>
                              <td className="rd-day-body rd-day-prev-month">29</td>
                              <td className="rd-day-body rd-day-prev-month">30</td>
                              <td className="rd-day-body rd-day-prev-month">31</td>
                              <td className="rd-day-body">01</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">02</td>
                              <td className="rd-day-body">03</td>
                              <td className="rd-day-body">04</td>
                              <td className="rd-day-body">05</td>
                              <td className="rd-day-body">06</td>
                              <td className="rd-day-body">07</td>
                              <td className="rd-day-body">08</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">09</td>
                              <td className="rd-day-body">10</td>
                              <td className="rd-day-body">11</td>
                              <td className="rd-day-body">12</td>
                              <td className="rd-day-body">13</td>
                              <td className="rd-day-body">14</td>
                              <td className="rd-day-body">15</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">16</td>
                              <td className="rd-day-body">17</td>
                              <td className="rd-day-body">18</td>
                              <td className="rd-day-body rd-day-selected">19</td>
                              <td className="rd-day-body">20</td>
                              <td className="rd-day-body">21</td>
                              <td className="rd-day-body">22</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">23</td>
                              <td className="rd-day-body">24</td>
                              <td className="rd-day-body">25</td>
                              <td className="rd-day-body">26</td>
                              <td className="rd-day-body">27</td>
                              <td className="rd-day-body">28</td>
                              <td className="rd-day-body">29</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">30</td>
                              <td className="rd-day-body rd-day-next-month">01</td>
                              <td className="rd-day-body rd-day-next-month">02</td>
                              <td className="rd-day-body rd-day-next-month">03</td>
                              <td className="rd-day-body rd-day-next-month">04</td>
                              <td className="rd-day-body rd-day-next-month">05</td>
                              <td className="rd-day-body rd-day-next-month">06</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div id="inline_cal_to" data-rome-id="1">
                  <div className="rd-container" style={{ display: 'inline-block' }}>
                    <div className="rd-date">
                      <div className="rd-month">
                        <button className="rd-back" type="button"></button>
                        <button className="rd-next" type="button"></button>
                        <div className="rd-month-label">July 2024</div>
                        <table className="rd-days">
                          <thead className="rd-days-head">
                            <tr className="rd-days-row">
                              <th className="rd-day-head">Su</th>
                              <th className="rd-day-head">Mo</th>
                              <th className="rd-day-head">Tu</th>
                              <th className="rd-day-head">We</th>
                              <th className="rd-day-head">Th</th>
                              <th className="rd-day-head">Fr</th>
                              <th className="rd-day-head">Sa</th>
                            </tr>
                          </thead>
                          <tbody className="rd-days-body" data-rome-offset="0">
                            <tr className="rd-days-row">
                              <td className="rd-day-body rd-day-prev-month">30</td>
                              <td className="rd-day-body">01</td>
                              <td className="rd-day-body">02</td>
                              <td className="rd-day-body">03</td>
                              <td className="rd-day-body">04</td>
                              <td className="rd-day-body">05</td>
                              <td className="rd-day-body">06</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">07</td>
                              <td className="rd-day-body">08</td>
                              <td className="rd-day-body">09</td>
                              <td className="rd-day-body">10</td>
                              <td className="rd-day-body">11</td>
                              <td className="rd-day-body">12</td>
                              <td className="rd-day-body">13</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">14</td>
                              <td className="rd-day-body">15</td>
                              <td className="rd-day-body">16</td>
                              <td className="rd-day-body rd-day-selected">17</td>
                              <td className="rd-day-body">18</td>
                              <td className="rd-day-body">19</td>
                              <td className="rd-day-body">20</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">21</td>
                              <td className="rd-day-body">22</td>
                              <td className="rd-day-body">23</td>
                              <td className="rd-day-body">24</td>
                              <td className="rd-day-body">25</td>
                              <td className="rd-day-body">26</td>
                              <td className="rd-day-body">27</td>
                            </tr>
                            <tr className="rd-days-row">
                              <td className="rd-day-body">28</td>
                              <td className="rd-day-body">29</td>
                              <td className="rd-day-body">30</td>
                              <td className="rd-day-body">31</td>
                              <td className="rd-day-body rd-day-next-month">01</td>
                              <td className="rd-day-body rd-day-next-month">02</td>
                              <td className="rd-day-body rd-day-next-month">03</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
