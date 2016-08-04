angular.module('contactsApp', [])

    .controller('contactController', ['$scope', '$http',

        function ($scope, $http) {

            // Edit Mode Flag: 0 = not editing; 1 = editing
            var contactState = '0';

            // Add a contact to the database
            $scope.addContact = function () {
                if (contactState !== '0') {
                    window.alert("You are currently editing the contact, click update or clear");
                    return;
                }
                $http.post('/contactlist', $scope.contact).then(
                    function (response) {
                        console.log(response);
                        refresh();
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            }

            // Remove contact from database
            $scope.removeContact = function (id) {
                $http.delete('/contactlist/' + id).then(
                    function (response) {
                        console.log(response);
                        refresh();
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            }

            // Gets contact details from the server
            $scope.editContact = function (id) {
                $http.get('/contactlist/' + id).then(
                    function (response) {
                        $scope.contact = response.data;
                        contactState = '1';
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            }

            // Updates the details of a contact
            $scope.updateContact = function () {
                $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(
                    function (response) {
                        refresh();
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            }

            // Clears the current contact details
            $scope.clear = function () {
                $scope.contact = {};
                contactState = '0';
            }

            // Refreshes data
            var refresh = function () {
                $http.get('/contactlist').then(
                    function (response) {
                        $scope.contactlist = response.data;
                        contactState = '0';
                    },
                    function (error) {
                        console.log(error);
                    }
                );
                $scope.contact = {};
            }

            // Get data when controller runs
            refresh();
        }
    ]);